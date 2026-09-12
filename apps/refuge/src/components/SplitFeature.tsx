import { cn } from '@free-react-templates/ui'

interface SplitFeatureProps {
  side: 'left' | 'right'
}

const content = {
  left: {
    caption: 'Outstanding Services',
    heading: 'Why Choose Us',
    text: 'We provide tailored insurance solutions backed by decades of industry expertise. Our dedicated agents work tirelessly to ensure you get the best coverage at competitive rates.',
    extra:
      'From initial consultation to claims support, we are with you every step of the way. Our streamlined process makes getting covered simple and stress-free.',
    image: 'https://picsum.photos/seed/refuge-split-left/800/600',
  },
  right: {
    caption: 'Outstanding Services',
    heading: 'Why Choose Us',
    text: 'Our commitment to customer satisfaction has earned us the trust of thousands of families and businesses across the region.',
    extra:
      'We partner with industry-leading carriers to bring you comprehensive coverage options that adapt to your changing needs and budget.',
    image: 'https://picsum.photos/seed/refuge-split-right/800/600',
  },
}

export function SplitFeature({ side }: SplitFeatureProps) {
  const data = content[side]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            'grid items-center gap-12 md:grid-cols-2',
            side === 'right' && 'md:[direction:rtl]',
          )}
        >
          {/* Image */}
          <div className={cn(side === 'right' && 'md:[direction:ltr]')}>
            <img src={data.image} alt="" className="w-full rounded-lg object-cover" />
          </div>
          {/* Text */}
          <div className={cn(side === 'right' && 'md:[direction:ltr]')}>
            <span className="mb-2 block font-display text-sm font-bold uppercase tracking-wider text-brand">
              {data.caption}
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold uppercase text-ink md:text-4xl">
              {data.heading}
            </h2>
            <p className="mb-4 text-mist">{data.text}</p>
            <p className="text-mist">{data.extra}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
