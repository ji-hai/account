
interface StatusMap {
  [key: string]: {
    arrName: string;
    color: string;
    tag: string;
  };
}
const $statusMap: StatusMap = {
  mdc_offline: {
    arrName: 'MDC离线',
    color: '#ff4949',
    tag: 'danger',
  },
  offline: {
    arrName: '离线',
    color: '#3d3d3d',
    tag: 'info',
  },
  close: {
    arrName: '关机',
    color: '#8e8e8e',
    tag: 'info',
  },
  idle: {
    arrName: '空闲',
    color: '#d7d400',
    tag: 'warning',
  },
  working: {
    arrName: '运行',
    color: '#26b229',
    tag: 'success',
  },
  run_gap: {
    arrName: '加工间隔',
    color: '#9add6f',
    tag: 'success',
  },
  editing: {
    arrName: '设置',
    color: '#1082ff',
    tag: 'primary',
  },
  emergency: {
    arrName: '急停',
    color: '#ff4949',
    tag: 'danger',
  },
  pause: {
    arrName: '暂停',
    color: '#00b9ff',
    tag: 'success',
  },
  overhaul: {
    arrName: '维护',
    color: '#ff9b00',
    tag: 'warning',
  },
  collect_err: {
    arrName: '采集异常',
    color: '#ff4949',
    tag: 'danger',
  },
  debug: {
    arrName: '手动',
    color: '#00b9ff',
    tag: 'primary',
  },
};
/**
 * 一个map对象, 根据status获取对应的arrName, color, tag
 * @example statusMap(some_status)
 */
export const statusMap = (status: string) => {
  const obj = $statusMap[status];
  return obj || $statusMap.offline;
};

/**
 * 判断一个状态是否属于正常的状态
 * @param status
 */
export function isNormal(status: string) {
  const normalStatus = ['working', 'run_gap', 'pause', 'debug', 'idle', 'editing'];
  return normalStatus.includes(status);
}

/**
 * 判断一个状态是否属于不正常的状态
 * @param status
 */
export function isAbnormal(status: string) {
  const abnormalStatus = ['emergency', 'collect_err'];
  return abnormalStatus.includes(status);
}

/**
 * 判断一个状态是否属于离线状态
 * @param status
 */
export function isOffline(status: string) {
  const offlineStatus = ['close', 'offline', 'overhaul'];
  return offlineStatus.includes(status);
}

/**
 * 将提供的时间数据填充进日期对象
 * @param dt 日期对象
 * @param base 填充的时间数据
 */
export function fillBaseTime(dt: Date, base: any = {
  hh: 0,
  mm: 0,
  ss: 0,
}) {
  dt.setHours(base.hh);
  dt.setMinutes(base.mm);
  dt.setSeconds(base.ss);
  dt.setMilliseconds(0);
}

/**
 * 用于默认的时间范围, 若提供的开始时间晚于当前时间则将开始日期提前一天
 */
export function getDefaultDatetimePickerRanger(startTime?: any) {
  const startBase = new Date();
  fillBaseTime(startBase, startTime);
  let ret: Date[] = [];
  const end = new Date();
  const start = new Date();
  if (start.getTime() < startBase.getTime()) {
    start.setDate(start.getDate() - 1);
  }
  fillBaseTime(start, startTime);
  ret = [start, end];
  return ret;
}

/**
 * 根据oee返回对应的状态
 * @param num oee数值
 */
export function oeeProgressStatus(num: number) {
  if (num > 80) {
    return 'success';
  } else if (num < 40) {
    return 'exception';
  } else {
    return undefined;
  }
}

/**
 * 根据oee返回对应的颜色值
 * @param num oee数值
 */
export function oeeProgressColor(num: number) {
  if (num > 80) {
    return '#26b229';
  } else if (num < 40) {
    return '#FF4949';
  } else {
    return '#00afff';
  }
}

/**
 * 一个对象， 用于获取全局的echart样式
 * todo 用echarts-helper中的getColor
 */
export const echartStyle = {
  titleColor: '#ffffff',
  textColor: 'white',
  contentColor: '#3398DB',
};
