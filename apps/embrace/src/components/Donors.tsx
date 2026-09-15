interface Donor {
  name: string
  amount: string
  image: string
}

const donors: Donor[] = [
  {
    name: 'Linda Reyez',
    amount: '$500.00',
    image: 'https://picsum.photos/seed/donor-linda/200/200',
  },
  {
    name: 'Chris Worth',
    amount: '$1,500.00',
    image: 'https://picsum.photos/seed/donor-chris/200/200',
  },
  {
    name: 'Janet Morris',
    amount: '$250.00',
    image: 'https://picsum.photos/seed/donor-janet/200/200',
  },
  { name: 'Jessa Sy', amount: '$400.00', image: 'https://picsum.photos/seed/donor-jessa/200/200' },
]

export function Donors() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/donors-bg/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Donations</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            We are grateful for every generous contribution. Your support makes our mission
            possible.
          </p>
        </div>

        {/* Donor cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {donors.map((donor) => (
            <div key={donor.name} className="text-center">
              <figure className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white/20">
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <h3 className="text-lg font-bold text-white">{donor.name}</h3>
              <p className="text-sm text-gray-300">
                Donated <span className="font-bold text-primary">{donor.amount}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
