/* eslint-disable @typescript-eslint/no-explicit-any */
export function toString(value: any): string {
  return Object.prototype.toString.call(value);
}

export function isArray(value: any): boolean {
  return toString(value) === "[object Array]";
}
