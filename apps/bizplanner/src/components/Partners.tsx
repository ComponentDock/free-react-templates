const partners = [
  { name: 'Partner 1', seed: 'bizplanner-partner-1' },
  { name: 'Partner 2', seed: 'bizplanner-partner-2' },
  { name: 'Partner 3', seed: 'bizplanner-partner-3' },
  { name: 'Partner 4', seed: 'bizplanner-partner-4' },
  { name: 'Partner 5', seed: 'bizplanner-partner-5' },
  { name: 'Partner 6', seed: 'bizplanner-partner-6' },
]

export function Partners() {
  return (
    <section className="border-t border-gray-100 bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={`https://picsum.photos/seed/${partner.seed}/120/50`}
              alt={partner.name}
              className="h-10 object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
