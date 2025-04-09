import _ from "lodash";

export function formatNumber(value?: number): string {
  if (_.isNil(value)) return "";
  return new Intl.NumberFormat("en-US").format(value);
}
