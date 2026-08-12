import { ButtonLink } from '@free-react-templates/ui'

interface Split {
  key: string
  title: string
  text: string
  list: string[]
  numbered: boolean
  image: string
  alt: string
  listLabel: string
}

const splits: Split[] = [
  {
    key: 'service',
    title: 'Choose the best service',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam ut interdum ultricies. In a leo vel dolor tempor feugiat. Cras accumsan faucibus magna a imperdiet.',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Maecenas ornare, arcu at lobortis ultrices, neque erat euismod erat',
      'Nam pulvinar dapibus justo, ac pharetra neque dictum non',
    ],
    numbered: false,
    image: 'https://picsum.photos/seed/serverly-1/560/520',
    alt: 'Best service illustration',
    listLabel: 'Service highlights',
  },
  {
    key: 'servers',
    title: 'The best servers',
    text: '',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis.',
      'Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat.',
      'Lorem ipsum dolor sit amet, adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat.',
    ],
    numbered: true,
    image: 'https://picsum.photos/seed/serverly-2/560/520',
    alt: 'Best servers illustration',
    listLabel: 'Server highlights',
  },
] as const

export function SplitFeatures() {
  return (
    <>
      {splits.map((split, index) => (
        <section
          key={split.key}
          id={split.key}
          aria-label={split.title}
          className={index === 0 ? 'bg-white pt-[111px]' : 'bg-white pb-[154px] pt-[105px]'}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-semibold text-navy-900">{split.title}</h2>
              {split.text && (
                <p className="mt-5 text-sm leading-relaxed text-mist-400">{split.text}</p>
              )}
              <ul aria-label={split.listLabel} className="mt-8 space-y-4">
                {split.list.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-sm leading-relaxed text-mist-400"
                  >
                    {split.numbered ? (
                      <span className="font-display text-lg font-bold text-brand-400">
                        {String(itemIndex + 1).padStart(2, '0')}.
                      </span>
                    ) : (
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-400"
                        aria-hidden="true"
                      />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#pricing"
                className="mt-10 inline-flex h-[72px] max-w-[193px] rounded-[36px] bg-gradient-to-r from-brand-400 to-brand-500 px-9 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
              >
                order plan
              </ButtonLink>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={split.image}
                alt={split.alt}
                className="h-auto w-full max-w-md rounded-[30px] shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
