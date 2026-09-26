export default function About() {
  const bullets = [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
    'Ut enim ad minima veniam, quis nostrum exercitationem ullam.',
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/finpilot-about/600/500"
              alt="About FinPilot"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
              The Largest Business Expert
            </h2>
            <p className="text-mist leading-relaxed mb-6">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
              eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
              rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <ul className="space-y-3 mb-8">
              {bullets.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-mist text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-medium px-8 py-3 rounded transition-colors"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
