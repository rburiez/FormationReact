export const euroFormattter = Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2});
export const dateFormatter = Intl.DateTimeFormat("fr-FR", { year: "numeric", month:"2-digit", day: "2-digit" });

export function CompareString(a, b) {
   if(a > b) { return 1; } if(b > a) { return -1; } return 0; 
} 