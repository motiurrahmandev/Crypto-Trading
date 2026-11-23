import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Format a number as currency.
 * Small values (< 1) get extra decimals so low-priced coins stay readable.
 */
export function formatCurrency(
  value: number | null | undefined,
  currency: string = "USD",
  locale: string = "en-US",
  maximumFractionDigits?: number
): string {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "-"
  }

  const maxDigits =
    maximumFractionDigits ?? (Math.abs(value) > 0 && Math.abs(value) < 1 ? 6 : 2)

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: Math.min(2, maxDigits),
    maximumFractionDigits: maxDigits,
  }).format(value)
}

/**
 * Format a number as a percentage, e.g. 2.345 -> "2.35%".
 * Pass `showSign` to prefix positive values with "+".
 */
export function formatPercentage(
  value: number | null | undefined,
  showSign: boolean = false,
  fractionDigits: number = 2
): string {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "-"
  }

  const formatted = Math.abs(value).toFixed(fractionDigits)
  const sign = value < 0 ? "-" : showSign && value > 0 ? "+" : ""

  return `${sign}${formatted}%`
}
