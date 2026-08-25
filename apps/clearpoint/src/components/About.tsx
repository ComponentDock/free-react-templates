import { skillsData } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-24 text-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="https://picsum.photos/seed/clearpoint-about/600/700"
              alt="About John Clearpoint"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#d5c455]">
              About Me
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional &amp; Passionate Designer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              I am a dedicated UI/UX designer and full-stack developer with over 8 years of
              experience building exceptional digital products. My goal is to bridge the gap between
              aesthetics and functionality.
            </p>

            <div className="mt-8 space-y-6">
              {skillsData.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-[#d5c455]"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
