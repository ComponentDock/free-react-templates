const logos = [
  { name: 'Mailchimp', seed: 'logo-mailchimp' },
  { name: 'PayPal', seed: 'logo-paypal' },
  { name: 'Stripe', seed: 'logo-stripe' },
  { name: 'Spotify', seed: 'logo-spotify' },
]

export function CompanyLogos() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold text-text-primary">
          Our Candidates Work In Company
        </h2>
        <p className="mb-12 text-text-muted">
          We connect top talent with leading companies worldwide.
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img
                src={`https://picsum.photos/seed/${logo.seed}/160/60`}
                alt={`${logo.name} logo`}
                className="h-12 w-auto opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
