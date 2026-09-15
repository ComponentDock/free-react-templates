const campaigns = [
  {
    name: 'Build a School',
    raised: 4500,
    total: 10000,
    percent: 45,
    image: 'https://picsum.photos/seed/carewell-campaign-1/400/250',
  },
  {
    name: 'Food for Families',
    raised: 8200,
    total: 12000,
    percent: 68,
    image: 'https://picsum.photos/seed/carewell-campaign-2/400/250',
  },
  {
    name: 'Emergency Relief',
    raised: 3100,
    total: 8000,
    percent: 39,
    image: 'https://picsum.photos/seed/carewell-campaign-3/400/250',
  },
]

export function SupportCampaign() {
  return (
    <section className="bg-bg-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-medium text-text-primary md:text-3xl">
            Support a Campaign or Fundraiser
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted">
            The French Revolution constituted for the conscience of the dominant aristocratic class
            a fall from innocence the natural chain of events.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.name}
              className="overflow-hidden border border-border bg-white shadow-sm"
            >
              <img
                src={campaign.image}
                alt={campaign.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-base font-medium text-text-primary">{campaign.name}</h3>
                <div className="mb-1 h-2 w-full overflow-hidden bg-gray-200">
                  <div
                    className="h-full bg-brand"
                    style={{ width: `${campaign.percent}%` }}
                    role="progressbar"
                    aria-valuenow={campaign.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="text-xs text-text-muted">
                  <span className="font-semibold text-brand-gold">
                    Raised: ${campaign.raised.toLocaleString()}
                  </span>{' '}
                  / ${campaign.total.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
