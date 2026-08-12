const domains = [
  { name: 'com', price: '$3.99', color: '#005cc3' },
  { name: 'net', price: '$1.99', color: '#a736df' },
  { name: 'org', price: '$2.99', color: '#fa9900' },
  { name: 'io', price: '$3.99', color: '#df36b9' },
  { name: 'info', price: '$13.99', color: '#242424' },
] as const

export function DomainPricing() {
  return (
    <section
      aria-label="Domain pricing"
      className="relative z-10 mx-auto -mt-20 max-w-6xl px-4 sm:px-6"
    >
      <ul
        aria-label="Domain prices"
        className="flex h-[140px] items-center justify-around rounded-[50px] bg-white px-6 shadow-lg"
      >
        {domains.map((domain) => (
          <li key={domain.name} className="text-center">
            <a href="#home" className="inline-flex items-baseline gap-0.5">
              <span className="text-[30px] font-semibold leading-none text-leaf-500">.</span>
              <span className="text-2xl font-bold leading-none" style={{ color: domain.color }}>
                {domain.name}
              </span>
            </a>
            <p className="mt-1 text-lg text-[#808080]">{domain.price}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
