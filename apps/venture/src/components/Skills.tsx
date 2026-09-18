const skills = [
  { name: 'User Interface', percentage: 75 },
  { name: 'Digital Marketing', percentage: 89 },
  { name: 'Brand Design', percentage: 95 },
]

export function Skills() {
  return (
    <section className="py-16 lg:py-24 bg-[#f9f9ff]">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p
              className="text-[#04dbec] text-lg mb-3"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              All of Our Skills In The Field
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#0b1c39] mb-6"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Differentiate Yourself And Attract Attention
            </h2>
            <p className="text-[#506172] mb-8">
              We bring expertise across multiple disciplines to help your business stand out in the
              competitive market landscape.
            </p>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#0b1c39] font-medium">{skill.name}</span>
                    <span className="text-[#04dbec] font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#04dbec] transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src="https://picsum.photos/seed/venture-skills/600/400"
              alt="Our skills"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
