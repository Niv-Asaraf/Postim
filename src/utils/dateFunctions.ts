export const getMonthName = (
  dateInput: string | Date,
  locale: string = "en-US"
): string => {
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
};
export const getDayNumber = (
  dateInput: string | Date,
  locale: string = "en-US"
): string => {
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat(locale, { day: "numeric" }).format(date);
};
export const getYear = (
  dateInput: string | Date,
  locale: string = "en-US"
): string => {
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat(locale, { year: "numeric" }).format(date);
};
