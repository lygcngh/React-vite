// date-utils.ts
import { format } from "date-fns"

export enum DateFormat {
  FULL = "yyyy-MM-dd HH:mm:ss",
  SIMPLE = "MM-dd HH:mm",
  DATE_ONLY = "yyyy-MM-dd",
  TIME_ONLY = "HH:mm",
}

/**
 * Formats a timestamp into a string representation according to the specified format type
 * @param timestamp - The timestamp to format, can be a string, number, or Date object
 * @param formatType - The format type to use, defaults to full date and time format
 * @returns Formatted date string according to the specified format type
 * @example
 * ```typescript
 * formatTimestamp(new Date('2023-01-01T12:00:00Z')) 
 * // Returns: "2023-01-01 12:00:00"
 * 
 * formatTimestamp(1672538400000, DateFormat.SIMPLE)
 * // Returns: "01-01 12:00"
 * ```
 */
export function formatTimestamp(
  timestamp: string | number | Date,
  formatType: DateFormat = DateFormat.FULL,
): string {
  let date: Date
  if (timestamp instanceof Date) {
    date = timestamp
  } else {
    date = new Date(timestamp)
  }
  return format(date, formatType)
}
