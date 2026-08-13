export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Domain', href: '#domain' },
  { label: 'Hosting', href: '#hosting' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const usefulLinks = [
  'Servers',
  'Windows Hosting',
  'Cloud Hosting',
  'OS Servers',
  'Linux Servers',
  'Policy',
] as const

export const tldPrices = [
  { tld: '.com', price: '$9.75' },
  { tld: '.net', price: '$9.50' },
  { tld: '.biz', price: '$8.95' },
  { tld: '.co', price: '$7.80' },
  { tld: '.me', price: '$7.95' },
] as const

export const office = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
} as const
