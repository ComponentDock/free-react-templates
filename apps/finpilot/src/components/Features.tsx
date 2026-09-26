interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center px-6 py-8 text-center text-white">
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

const features: FeatureProps[] = [
  {
    icon: (
      <svg
        className="h-7 w-7 text-brand"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Unlimited Control',
    description:
      'Autem vel illum qui dolores eos qui ratione voluptatem sequi nesciunt neque porro.',
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-brand"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rapid Growth',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.',
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-brand"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Problem Solving',
    description:
      'Similique sunt in culpa qui officia deserunt mollitia animi id est laborum dolorum.',
  },
]

export default function Features() {
  return (
    <section className="bg-dark-bg py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-0 sm:grid-cols-3">
        {features.map((f) => (
          <Feature key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}
