export const milestones: ReadonlyArray<{ number: string; caption: string }> = [
  { number: '1374', caption: 'Happy Clients' },
  { number: '356', caption: 'Strong Bodies' },
  { number: '57k', caption: 'IG Followers' },
  { number: '24/7', caption: 'Working Hours' },
]

export function Milestones() {
  return (
    <section className="bg-[#f6f9fa] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
        {milestones.map((stat) => (
          <div key={stat.caption}>
            <h2 className="inline-block bg-brand px-3 py-1 text-3xl font-bold text-[#353535]">
              {stat.number}
            </h2>
            <p className="mt-3 text-lg text-[#353535]">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
