interface InfoItemProps {
  label: string
  value: string
  href?: string
}

function InfoItem({ label, value, href }: InfoItemProps) {
  return (
    <div className="flex-1">
      <p className="mb-0">
        <span className="mb-1 block text-[13px] font-semibold uppercase text-text-info-label">
          {label}:
        </span>
        {href ? (
          <a
            href={href}
            className="text-sm text-text-info-value transition-colors hover:text-text-heading"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm text-text-info-value">{value}</span>
        )}
      </p>
    </div>
  )
}

const infoItems: InfoItemProps[] = [
  {
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    label: 'Email',
    value: 'info@yoursite.com',
    href: 'mailto:info@yoursite.com',
  },
  {
    label: 'Phone',
    value: '+ 1235 2355 98',
    href: 'tel:+123****5598',
  },
]

export function ContactInfo() {
  return (
    <div className="mb-6 flex flex-col gap-6 md:flex-row md:gap-4">
      {infoItems.map((item) => (
        <InfoItem key={item.label} {...item} />
      ))}
    </div>
  )
}
