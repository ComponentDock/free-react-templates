export const trainers: ReadonlyArray<{ name: string; bio: string; photo: string }> = [
  {
    name: 'Michael Smith',
    bio: 'Strength coach with a decade of experience building raw power and confidence on the platform.',
    photo: 'https://picsum.photos/id/453/300/300',
  },
  {
    name: 'Jessica Black',
    bio: 'Conditioning specialist who blends athletic drills with smart programming for fast, lasting results.',
    photo: 'https://picsum.photos/id/1027/300/300',
  },
  {
    name: 'Paula Carlton',
    bio: 'Mobility and flexibility expert helping members move better, recover faster, and stay injury-free.',
    photo: 'https://picsum.photos/id/64/300/300',
  },
  {
    name: 'Emily Carter',
    bio: 'Group-fitness leader known for high-energy classes that keep every member coming back for more.',
    photo: 'https://picsum.photos/id/823/300/300',
  },
]

export function Trainers() {
  return (
    <section id="classes" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-[#353535] md:text-5xl">
            Meet the <span className="bg-brand px-1">Trainers</span>
          </h2>
        </div>
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <div key={trainer.name}>
              <img
                src={trainer.photo}
                alt={`${trainer.name} portrait`}
                width={300}
                height={300}
                loading="lazy"
                className="mx-auto aspect-square w-56 rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-[#353535]">{trainer.name}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-muted">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
