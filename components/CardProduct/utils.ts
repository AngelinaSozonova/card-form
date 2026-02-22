import _isEmpty from "lodash/isEmpty";
import _isObject from "lodash/isObject";
import { isArray } from "lodash";
import { FormData } from "./types";

export const formatDataCreateProduct = (data: FormData) => {
  const newData: Record<string, unknown> = {};

  for (const key in data) {
    const valueData = data[key as keyof FormData]
    const isEmpty = _isEmpty(valueData);
    const isNumber = typeof valueData === "number";

    if (!isEmpty || isNumber) {
      if (_isObject(valueData)) {
        if (isArray(valueData)) {
          newData[key] = valueData;
          continue;
        }
        const value = valueData?.value;

        if (value) {
          newData[key] = value;
        }
        continue;
      }

      newData[key] = data[key as keyof FormData];
    }
  }

  return newData;
};
