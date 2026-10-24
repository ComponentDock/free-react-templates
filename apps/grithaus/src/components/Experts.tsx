import { cn } from '@free-react-templates/ui'
import { SectionHeading } from './SectionHeading'
import { expertsBandImage, siteName, trainers, type Trainer } from '../data'

/* Staggered photo wall: four frames overlap by ~2% and step down in height,
   which reproduces the reference's absolute-positioned coach collage while
   keeping every name plate legible. */
const layout = [
  { left: '0%', width: '28%', top: '0%', height: '100%' },
  { left: '26%', width: '26%', top: '6%', height: '94%' },
  { left: '50%', width: '26%', top: '2%', height: '97%' },
  { left: '72%', width: '26%', top: '9%', height: '91%' },
] as const

function TrainerCard({ trainer, index }: { trainer: Trainer; index: number }) {
  const frame = layout[index]!
  return (
    <figure
      data-compact={trainer.compact}
      className="absolute overflow-hidden rounded-[10px]"
      style={{
        left: frame.left,
        top: frame.top,
        width: frame.width,
        height: frame.height,
        zIndex: index + 1,
      }}
    >
      <img src={trainer.image} alt={`${trainer.name}, ${trainer.role}`} className="h-full w-full object-cover" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-ink/90 px-3 py-3 text-center">
        <span
          className={cn(
            'block font-bold uppercase italic text-white',
            trainer.compact ? 'text-[14px]' : 'text-[22px]',
          )}
        >
          {trainer.name}
        </span>
        <span
          className={cn(
            'block font-bold uppercase italic text-brand',
            trainer.compact ? 'text-[10px]' : 'text-[14px]',
          )}
        >
          {trainer.role}
        </span>
      </figcaption>
    </figure>
  )
}

export function Experts() {
  return (
    <section aria-label="Coaching team" className="relative pt-[100px]">
      <img src={expertsBandImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-night/85" />
      <div className="relative mx-auto max-w-[1170px] px-4 pb-[100px]">
        <SectionHeading label={siteName} title="Ask the experts" white />
        <div className="grid gap-[30px] lg:grid-cols-12">
          <p className="text-[14px] italic leading-[2] text-white lg:col-span-3">
            Six coaches, all on the floor every day. Book a free assessment and one of them will write
            your first block — no sales call, no pressure.
          </p>
          <div className="relative h-[420px] overflow-hidden lg:col-span-9 lg:h-[500px]">
            {trainers.map((trainer, index) => (
              <TrainerCard key={trainer.name} trainer={trainer} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
