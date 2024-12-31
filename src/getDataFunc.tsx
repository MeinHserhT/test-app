export async function getSheetById(sheetId: string) {
  const sheetAPI: string = process.env.SHEET_API || "";
  const res = await fetch(sheetAPI + sheetId);
  return res.json();
}

export async function getSheetsByYear(year: string) {
  const sheetYearAPI: string = process.env.SHEET_YEAR_API || "";
  const res = await fetch(sheetYearAPI + year);
  return res.json();
}

export async function getSheetsByMonth(mnth: string) {
  const sheetMonthAPI: string = process.env.SHEET_MONTH_API || "";
  const res = await fetch(sheetMonthAPI + mnth);
  return res.json();
}
