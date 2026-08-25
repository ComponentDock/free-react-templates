export interface ServiceRow {
  number: string
  name: string
  count: string
}

export interface AccordionPanel {
  id: string
  title: string
  badge: string
  rows: ServiceRow[]
}

/** Panel 1 — My Files: local/file storage services. */
const MY_FILES_ROWS: ServiceRow[] = [
  { number: '01', name: 'Dropbox', count: '21' },
  { number: '02', name: 'Skydrive', count: '100' },
  { number: '03', name: 'FTP Server', count: '8' },
  { number: '04', name: 'Google Drive', count: '1' },
  { number: '05', name: 'OneDrive', count: '10' },
]

/** Panel 2 — Mail: email/storage providers. */
const MAIL_ROWS: ServiceRow[] = [
  { number: '01', name: 'Gmail', count: '34' },
  { number: '02', name: 'Outlook', count: '18' },
  { number: '03', name: 'Yahoo Mail', count: '12' },
  { number: '04', name: 'ProtonMail', count: '15' },
  { number: '05', name: 'iCloud Mail', count: '10' },
]

/** Panel 3 — Cloud: cloud platform services. */
const CLOUD_ROWS: ServiceRow[] = [
  { number: '01', name: 'AWS S3', count: '42' },
  { number: '02', name: 'Azure Blob', count: '28' },
  { number: '03', name: 'Google Cloud', count: '19' },
  { number: '04', name: 'DigitalOcean', count: '8' },
  { number: '05', name: 'Backblaze B2', count: '5' },
]

/** Accordion panels in reference order — My Files open by default. */
export const PANELS: AccordionPanel[] = [
  { id: 'my-files', title: 'My Files', badge: '349', rows: MY_FILES_ROWS },
  { id: 'mail', title: 'Mail', badge: '89', rows: MAIL_ROWS },
  { id: 'cloud', title: 'Cloud', badge: '102', rows: CLOUD_ROWS },
]
