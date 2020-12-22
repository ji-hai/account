import {debounce, isNil, deepClone} from 'web-toolkit/src/utils';

export const isProvinceZoom = (zoom: number) => {
  return zoom > 3 && zoom < 8;
};
export const isCityZoom = (zoom: number) => {
  return zoom >= 8 && zoom < 11;
};
export const getDistrictLevel = (zoom: number) => {
  if (zoom < 8) {
    return 'province';
  } else if (zoom >= 8 && zoom < 9) {
    return 'city';
  } else {
    return 'district';
  }
};

let infoWindow: AMap.InfoWindow;
export function setInfoWindow(opts: {
  map: AMap.Map;
  content: string | HTMLElement;
  anchor?: AMap.Anchor;
  offset?: AMap.Pixel;
  position?: AMap.LngLat;
}) {
  if (!infoWindow) {
    infoWindow = new AMap.InfoWindow(opts);
  } else {
    infoWindow.setContent(opts.content);
    opts.anchor && infoWindow.setAnchor(opts.anchor);
    opts.offset && infoWindow.setOffset(opts.offset);
    opts.position && infoWindow.setPosition(opts.position);
  }
  infoWindow.open(opts.map);
}

const weather = new AMap.Weather();
export const getLiveWeather = async (district: string) => {
  return new Promise((resolve) => {
    weather.getLive(district, (err, data) => {
      resolve(err ? undefined : data);
    });
  });
};

let marker: AMap.Marker;
export const mark = async (lnglat: AMap.LngLat, map: AMap.Map) => {
  if (!marker) {
    marker = new AMap.Marker();
  }
  marker.setPosition(lnglat);
  marker.setMap(map);
};

const geocoder = new AMap.Geocoder();
export const getAddress = async (lnglat: AMap.LngLat) => {
  return new Promise<any>((resolve) => {
    geocoder.getAddress(lnglat, (status, result) => {
      if (status === 'complete' && result.regeocode) {
        resolve(result.regeocode);
      } else {
        resolve();
      }
    });
  });
};
export const getLocation = async (address: string) => {
  return new Promise<any>((resolve) => {
    geocoder.getLocation(address, (status, result) => {
      if (status === 'complete' && result.geocodes.length) {
        resolve(result.geocodes);
      } else {
        resolve();
      }
    });
  });
};

const districtSearch = new AMap.DistrictSearch({
  level: 'province',
  extensions: 'all',
  subdistrict: 0,
});
export const getDistrictBounds = (level: 'province' | 'city' | 'district', value: string) => {
  return new Promise<{ bounds: number[][], name: string }>((resolve) => {
    districtSearch.setLevel(level);
    districtSearch.search(value, (status, result) => {
      if (status === 'complete' && result.districtList && result.districtList[0]) {
        resolve({
          bounds: result.districtList[0].boundaries,
          name: result.districtList[0].name,
        });
      } else {
        resolve({
          bounds: [],
          name: '',
        });
      }
    });
  });
};

let polygons: AMap.Polygon[];
let districtName: string;
export const highLightDistrict = (name: string, bounds: number[][], map: AMap.Map) => {
  if (districtName === name) {
    return;
  }
  districtName = name;
  if (polygons) {
    map.remove(polygons);
  }
  polygons = bounds.map((bound) => new AMap.Polygon({
    strokeWeight: 1,
    path: bound,
    fillOpacity: 0.4,
    fillColor: '#80d8ff',
    strokeColor: '#0091ea',
  }));
  map.add(polygons);
};

import {IDevice} from '@/types/beans';

export const changeXY = (deviceList: IDevice[]) => {
  let x = 0;
  let y = 0;
  deviceList.sort( function( a: IDevice, b: IDevice) {
    if (isNil(a.extend.lon) || isNil(b.extend.lon)) { return 0; }
    return (a.extend.lon - b.extend.lon);
  });
  for (const device of deviceList) {
    if (isNil(device.extend.lon) || isNil(device.extend.lat)) { continue; }
    if (device.extend.lon === x && device.extend.lat === y) {
       device.extend.lon = parseFloat((0.0005 * Math.random()).toFixed(6)) + device.extend.lon;
       device.extend.lat = parseFloat((0.0005 * Math.random()).toFixed(6)) + device.extend.lat;
    } else {
      x = device.extend.lon;
      y = device.extend.lat;
    }
  }
  return  deviceList;
};
