import { format } from "date-fns";

export const formatShortTimestamp = (timestamp: string | number) =>
  format(new Date(Number(timestamp) * 1000), "dd/MM/yyyy HH:mm:ss");
