const education = [
  {
    degree: 'Master Degree',
    institution: 'University of Technology',
    graduation: 'Graduated: June 2016',
    description:
      'Advanced studies in business administration with a focus on digital marketing and project management.',
  },
  {
    degree: 'Course on Computer Science',
    institution: 'Online Academy',
    graduation: 'Completed: December 2014',
    description:
      'Comprehensive course covering programming fundamentals, web development, and database management.',
  },
  {
    degree: 'Valedictorian',
    institution: 'Springfield High School',
    graduation: 'Graduated: June 2012',
    description:
      'Top of class with outstanding academic achievements and leadership in extracurricular activities.',
  },
]

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            ACADEMIC CAREER
          </p>
          <h2 className="mb-4 text-3xl font-bold text-heading">Education</h2>
          <div className="mx-auto h-[10px] w-[50px] rounded-[5px] bg-brand" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {education.map((entry) => (
            <div key={entry.degree} className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-1 text-xl font-bold text-heading">{entry.degree}</h3>
              <p className="mb-1 text-sm font-medium text-brand">{entry.institution}</p>
              <p className="mb-4 text-xs text-muted">{entry.graduation}</p>
              <p className="text-sm text-paragraph">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
