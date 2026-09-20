const logos = ['EduLearn', 'SkillUp', 'LearnHub', 'CoursePro', 'StudyMax']

export function ClientLogos() {
  return (
    <section className="bg-bg-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center rounded bg-white px-8 shadow-sm"
            >
              <span className="text-lg font-bold tracking-wider text-text-muted">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
