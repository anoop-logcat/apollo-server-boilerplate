import { forEach } from "lodash";
import { Types } from "mongoose";
import { mapObjIndexed } from "ramda";

export function sayHello() {
  return "Hello World from shared-backend";
}

const isPrimitiveType = (v: unknown) =>
  typeof v === "boolean" ||
  typeof v === "number" ||
  typeof v === "undefined" ||
  v === null ||
  v instanceof RegExp ||
  typeof v === "string" ||
  v instanceof Date;

const parseValue = (v: any) =>
  Types.ObjectId.isValid(v)
    ? new Types.ObjectId(v)
    : isPrimitiveType(v)
    ? v
    : parseQuery(v);

export const parseQuery = (q: any): any =>
  Array.isArray(q) ? q.map(parseValue) : mapObjIndexed(parseValue, q);

export const getSearchRegex = (value: string) => {
  let search = "";
  forEach(value.split(" "), (s) => {
    const key = s.trim().toLowerCase();
    if (key) {
      if (search) search += "|";
      search += `(.*)${key}(.*)`;
    }
  });
  return search;
};
