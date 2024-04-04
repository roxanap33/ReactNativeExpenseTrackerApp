export function getFormattedDate(date) {
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDay(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
