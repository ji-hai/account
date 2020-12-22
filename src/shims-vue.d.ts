
declare module '*.vue' {
  global {
    class QWebChannel {
      [index: string]: any;
      constructor(transport: any, cb: (channel: QWebChannel) => any);
    }
    namespace qt {
      const webChannelTransport: any;
    }
    // const bridge: any;

    namespace AMap {
      function plugin(name: string, cb: () => any): void;
      type Status = 'complete' | 'no_data';
      class EventEmitter {
        on(event: string, handler: (e: any) => any): void;
      }
      class Map extends EventEmitter {
        constructor(id: string, opts?: {
          resizeEnable?: boolean;
          zoom?: number;
          center?: LngLat;
        });
        add(elm: any): void;
        remove(elm: any): void;
        getZoom(): number;
        getCenter(): LngLat;
        setFitView(elm: any): void;
        setFeatures(features: string[]): void;
      }
      class Geocoder {
        constructor(opts?: {
          city?: string;
          radius?: number;
        });
        getAddress(
          lngLat: LngLat,
          cb: (status: Status, result: any) => any,
        ): void;
        getLocation(
          address: string,
          cb: (status: Status, result: any) => any,
        ): void;
      }
      export class DistrictSearch {
        constructor(opts?: {
          subdistrict?: number;
          extensions?: string;
          level?: string;
        });
        setLevel(level: string): void;
        search(value: string, cb: (status: Status, result: any) => any): void;
      }
      export namespace DistrictLayer {
        class Province {
          constructor(opts: {
            zIndex?: number;
            adcode?: number[];
            depth?: number;
            styles?: {
              'fill'?: string;
              'province-stroke'?: string;
              'city-stroke'?: string;
              'county-stroke'?: string;
            };
          });
          setMap(map: Map | null): void;
        }
      }
      type LngLat = [number, number];
      type Anchor = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
      class InfoWindow {
        constructor(opts: {
          content?: string | HTMLElement;
          anchor?: Anchor;
          offset?: Pixel;
          position?: LngLat;
        });
        getIsOpen(): boolean;
        open(map: Map, position?: LngLat): void;
        close(): void;
        setAnchor(anchor: Anchor): void;
        setContent(content: string | HTMLElement): void;
        setOffset(offset: Pixel): void;
        setPosition(position: LngLat): void;
        setSize(size: number[]): void;
      }
      interface LiveWeatherData {
        city: string;
        weather: string;
        temperature: string; // 温度
        windDirection: string; // 风向
        windPower: string; // 风力
        humidity: string; // 湿度
        reportTime: string; // 发布时间
      }
      class Weather {
        getLive(district: string, cb: (err: Error | null, data: LiveWeatherData) => void): void;
      }
      class Polygon {
        constructor(opts: {
          strokeWeight?: number;
          path?: number[];
          fillOpacity?: number;
          fillColor?: string;
          strokeColor?: string;
        });
      }
      class Pixel {
        x: number;
        y: number;
        constructor(x: number, y: number);
      }
      class Marker extends EventEmitter {
        constructor(opts?: {
          map?: Map;
          icon?: string | Icon;
          position?: LngLat;
          offset?: Pixel;
          anchor?: Anchor;
        });
        setPosition(lngLat: LngLat): void;
        setMap(map: Map): void;
        setOffset(offset: Pixel): void;
        setAnchor(anchor: Anchor): void;
        setContent(content: string | HTMLElement): void;
      }
      class Size {
        constructor(width: number, height: number);
      }
      class Icon {
        constructor(opts?: {
          image: string;
          size?: Size;
          imageOffset?: Pixel;
          imageSize?: Size;
        });
      }
    }
  }
  import Vue from 'vue';
  export default Vue;
}
