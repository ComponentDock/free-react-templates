const features = [
  { icon: '♥', label: 'Passionate' },
  { icon: '✓', label: 'Honest' },
  { icon: '★', label: 'Dependable' },
  { icon: '↑', label: 'Always Improving' },
] as const

export function About() {
  return (
    <section id="about" className="bg-white px-4 py-20 font-['Quicksand',sans-serif]">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-dark">Welcome</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted">
          We are a passionate team dedicated to creating inspiring interior spaces. With years of
          experience in design and construction, we bring your vision to life with attention to
          every detail.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-center">
              <span className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl text-dark">
                {feature.icon}
              </span>
              <span className="text-sm font-medium text-dark">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
