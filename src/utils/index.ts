
export type AnyFunction = (...args: any[]) => any;

export const debounce = (fn: AnyFunction, freq: number = 300): AnyFunction => {
  let timer = 0;
  const dFn: () => void = function(this: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, [...arguments]);
    }, freq);
  };
  return dFn;
};
export const offsetWindow = (elm: HTMLElement) => {
  const offsetParent = elm.offsetParent;
  let offsetLeft = elm.offsetLeft;
  let offsetTop = elm.offsetTop;
  if (offsetParent) {
    const offset = offsetWindow(offsetParent as HTMLElement);
    offsetLeft += offset.left;
    offsetTop += offset.top;
  }
  return {
    left: offsetLeft,
    top: offsetTop,
  };
};
export const transformMiiliseconds = (milliseconds: number) => {
  const oneHour = 3600000;
  const oneMinute = 60000;
  const oneSecond = 1000;
  const hours = Math.floor(milliseconds / oneHour);
  milliseconds %= oneHour;
  const minutes = Math.floor(milliseconds / oneMinute);
  milliseconds %= oneMinute;
  const seconds = Math.floor(milliseconds / oneSecond);
  return `${hours}:${minutes}:${seconds}`;
};
