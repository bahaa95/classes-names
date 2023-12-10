import { isArray } from "./utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function classname(...classes: readonly any[]): string {
  return classnameSystem(classes);
}

function classnameSystem(classes: readonly any[], result: string[] = []): string {
  for (const [key, value] of Object.entries(classes)) {
    if (value && typeof value === "object") {
      classnameSystem(value, result);
    } else {
      let className = null;

      if (isArray(classes)) {
        className = typeof value === "string" ? value.trim() : null;
      } else {
        className = value ? key : null;
      }

      if (className) {
        result.push(className);
      }
    }
  }

  return result.join(" ");
}
