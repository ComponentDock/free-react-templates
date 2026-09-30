export interface DomainRow {
  tld: string
  duration: string
  registration: string
  renewal: string
  transfer: string
}

/** Demo domain-pricing dataset (6 TLDs) for the sample table. */
export const domains: DomainRow[] = [
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$70.00',
    renewal: '$5.00',
    transfer: '$5.00',
  },
  {
    tld: '.net',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$5.00',
  },
  {
    tld: '.org',
    duration: '1 Year',
    registration: '$65.00',
    renewal: '$5.00',
    transfer: '$5.00',
  },
  {
    tld: '.biz',
    duration: '1 Year',
    registration: '$60.00',
    renewal: '$5.00',
    transfer: '$5.00',
  },
  {
    tld: '.info',
    duration: '1 Year',
    registration: '$50.00',
    renewal: '$5.00',
    transfer: '$5.00',
  },
  {
    tld: '.me',
    duration: '1 Year',
    registration: '$45.00',
    renewal: '$5.00',
    transfer: '$5.00',
  },
]
