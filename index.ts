export function isNull(value: unknown): value is null {
  return value === null;
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function isBigInt(value: unknown): value is bigint {
  return typeof value === "bigint";
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

export function isObject(value: unknown): value is object {
  if (typeof value !== "object") return false;
  if (isNull(value)) return false;
  if (isArray(value)) return false;
  if (isDate(value)) return false;
  if (isRegExp(value)) return false;
  return true;
}

export function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}

export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

export function isDate(value: unknown): value is Date {
  if (typeof value !== "object") return false;
  if (!(value instanceof Date)) return false;
  if (isNaN(value.getTime())) return false;
  return true;
}

export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

export function assert(expr: unknown, msg?: string): asserts expr {
  if (!expr) throw new Error(msg);
}
