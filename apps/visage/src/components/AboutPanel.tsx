import { SkillBar } from './SkillsPanel'

export function AboutPanel() {
  const loaders = [
    { name: 'Intuition', percentage: 75, description: 'Etiam nec odio vestibulum est.' },
    { name: 'Creativity', percentage: 83, description: 'Odio vestibulum est mattis.' },
    { name: 'Pure Luck', percentage: 25, description: 'Vestibulum est mattis effic.' },
    { name: 'Awesomeness', percentage: 95, description: 'Vestibulum est mattis effic.' },
  ]

  return (
    <div>
      <p className="mb-1 text-sm font-medium text-brand">HTML5 &amp; CSS Developer</p>
      <h2 className="mb-6 text-4xl font-extrabold text-brand-dark">Jeremy Smith</h2>
      <h3 className="mb-4 text-lg font-bold text-brand-dark">Description</h3>
      <p className="mb-8 leading-relaxed text-paragraph">
        Passionate frontend developer with over 5 years of experience building responsive,
        accessible web applications. I specialize in creating elegant user interfaces with modern
        frameworks and clean, maintainable code. My approach combines creative design thinking with
        technical expertise to deliver exceptional digital experiences.
      </p>
      <div className="grid grid-cols-2 gap-8">
        {loaders.map((loader) => (
          <SkillBar key={loader.name} {...loader} />
        ))}
      </div>
    </div>
  )
}
