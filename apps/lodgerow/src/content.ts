export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export interface Head {
  /** h1 — a date range for the stay window, en dash (U+2013) between days. */
  title: string
  /** Sub-line — guest count, middle dot (U+00B7), then what the price includes. */
  sub: string
}

export const HEAD: Head = {
  title: '3 stays for 12 \u2013 17 Oct',
  sub: '2 guests \u00b7 prices include taxes and cleaning fees',
}
