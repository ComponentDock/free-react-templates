import { Wordmark } from './Wordmark'

interface Column {
  title: string
  href: string
  links: string[]
}

const COLUMNS: Column[] = [
  {
    title: 'Company',
    href: '#contact',
    links: ['About the racks', 'Careers', 'Press kit', 'Partners', 'Status page', 'Contact'],
  },
  {
    title: 'Platform',
    href: '#plans',
    links: ['Domains', 'Shared hosting', 'Cloud hosting', 'Object storage', 'Backups', 'API'],
  },
  {
    title: 'Resources',
    href: '#why',
    links: ['Documentation', 'Migration guides', 'Changelog', 'Community', 'Security', 'Blog'],
  },
]

interface Office {
  region: string
  address: string
  tel: string
  telHref: string
  mail: string
}

const OFFICES: Office[] = [
  {
    region: 'Europe',
    address: 'Amsterdam — 118 Prinsengracht',
    tel: '+31 20 555 0118',
    telHref: 'tel:+31205550118',
    mail: 'amsterdam@rackline.example',
  },
  {
    region: 'USA',
    address: 'Austin — 412 Congress Avenue',
    tel: '+1 512 555 0142',
    telHref: 'tel:+15125550142',
    mail: 'austin@rackline.example',
  },
]

const FOOTER_LINK =
  'text-white/70 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime'

/**
 * The slate footer: three link columns and two office blocks on the same band,
 * with a centred credit row underneath carrying the running year and the
 * Component Dock attribution.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-footer py-[48px] text-white/40 scroll-mt-[148px] min-[768px]:py-[112px] max-[992px]:scroll-mt-[75px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="mb-6 text-[18px] font-medium text-white">{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link} className="mb-[10px]">
                      <a href={column.href} className={FOOTER_LINK}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            {OFFICES.map((office) => (
              <div key={office.region} className="mb-8">
                <h3 className="mb-6 text-[18px] font-medium text-white">{office.region}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <p>{office.address}</p>
                  <p>
                    <a href={office.telHref} className={FOOTER_LINK}>
                      {office.tel}
                    </a>
                    <a href={`mailto:${office.mail}`} className={`block ${FOOTER_LINK}`}>
                      {office.mail}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 pt-12 text-center">
          <Wordmark />
          <p>
            © {year} Rackline. More templates at{' '}
            <a href="https://www.componentdock.com/" className={FOOTER_LINK}>
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
