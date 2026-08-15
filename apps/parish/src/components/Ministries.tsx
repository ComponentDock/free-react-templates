import { BookOpen, Church, Gem, HeartHandshake, Megaphone, PawPrint } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ministries } from '../data'

const iconMap: Record<string, typeof Church> = {
  'praying-hands': PawPrint,
  church: Church,
  'book-open': BookOpen,
  'heart-handshake': HeartHandshake,
  gem: Gem,
  megaphone: Megaphone,
}

export function getMinistryIcon(name: string): typeof Church {
  return iconMap[name] ?? Church
}

export function Ministries() {
  return (
    <section id="ministries" className="bg-white">
      <div className="mx-auto grid max-w-[1250px] gap-10 px-4 py-16 md:py-20 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          {ministries.map((ministry) => {
            const Icon = getMinistryIcon(ministry.icon)
            return (
              <div
                key={ministry.title}
                className="flex items-center gap-4 border-b border-gray-100 py-5 last:border-b-0"
              >
                <div className="flex-1 text-right">
                  <h3 className="mb-1 text-base font-semibold text-black uppercase">
                    {ministry.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-body">{ministry.body}</p>
                </div>
                <div
                  className={cn(
                    'flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full',
                    ministry.active ? 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]' : 'bg-brand',
                  )}
                >
                  <Icon className="h-10 w-10 text-black" aria-hidden="true" />
                </div>
              </div>
            )
          })}
        </div>
        <div className="hidden items-center lg:flex">
          <img
            src="https://picsum.photos/id/1082/700/900"
            alt="Hands in a moment of prayer"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
