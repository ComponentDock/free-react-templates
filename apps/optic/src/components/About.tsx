const skills = [
  { label: 'Photographer', percent: 89 },
  { label: 'Wedding', percent: 75 },
  { label: 'Events', percent: 94 },
  { label: 'Conferences', percent: 94 },
]

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: image + bio */}
          <div>
            <img
              src="https://picsum.photos/seed/optic-about/600/400"
              alt="Photographer at work"
              className="w-full rounded-lg mb-6 object-cover"
              loading="lazy"
            />
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a passionate photographer based in San Francisco, dedicated to capturing authentic
              moments and telling compelling visual stories. With over a decade of experience, I
              specialize in wedding, event, and portrait photography.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My approach combines technical precision with creative vision, ensuring every image
              reflects the true emotion and beauty of the moment.
            </p>
          </div>

          {/* Right: progress bars */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-gray-900">{skill.label}</span>
                  <span className="text-gray-500">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gold-400 h-3 rounded-full transition-all"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
