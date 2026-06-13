import { format, parseISO } from "date-fns";

export function formatDate(date: string) {
  return format(parseISO(date), "yyyy-MM-dd");
}

export function formatDateLong(date: string) {
  return format(parseISO(date), "MMMM d, yyyy");
}
