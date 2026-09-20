export function Teachers() {
  const teachers = [
    {
      name: 'Benjamin Stone',
      role: 'Physics Teacher',
      image: 'https://picsum.photos/seed/classroom-t1/200/200',
    },
    {
      name: 'Katleen Stone',
      role: 'Physics Teacher',
      image: 'https://picsum.photos/seed/classroom-t2/200/200',
    },
    {
      name: 'Sadie White',
      role: 'Physics Teacher',
      image: 'https://picsum.photos/seed/classroom-t3/200/200',
    },
  ]

  return (
    <section id="teachers" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Our Teachers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
              <p className="text-indigo-500 text-sm mb-2">{t.role}</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
