const teachers = [
  {
    name: 'Ivan Jacobson',
    subject: 'Computer Science',
    avatar: 'https://picsum.photos/seed/brightmind-teacher1/200/200',
  },
  {
    name: 'Sarah Parker',
    subject: 'Business Administration',
    avatar: 'https://picsum.photos/seed/brightmind-teacher2/200/200',
  },
  {
    name: 'Robert Chen',
    subject: 'Engineering',
    avatar: 'https://picsum.photos/seed/brightmind-teacher3/200/200',
  },
]

export function Teachers() {
  return (
    <section id="teachers" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-dark">Our Experience Advisors</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="overflow-hidden rounded-lg bg-white text-center shadow-sm"
            >
              <img src={teacher.avatar} alt={teacher.name} className="h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-dark">{teacher.name}</h3>
                <p className="text-sm text-brand-500">{teacher.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
