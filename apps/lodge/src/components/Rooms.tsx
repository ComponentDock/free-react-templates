import { useState } from 'react'
import {
  Calendar,
  Car,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Snowflake,
  Tv,
  Waves,
  Wifi,
} from 'lucide-react'
import {
  checkButtonLabel,
  checkTitle,
  dateFromLabel,
  datePlaceholder,
  dateToLabel,
  quantityDecreaseLabel,
  quantityIncreaseLabel,
  quantityLabel,
  quantityNames,
  roomFeatures,
  roomName,
  roomNextLabel,
  roomOptions,
  roomPhotoSeeds,
  roomPrevLabel,
  roomPrice,
  roomPriceFrom,
  roomSelectLabel,
  roomsSectionLabel,
} from '../data'
import { GoldButton } from './GoldButton'

const featureIcons = [Tv, Wifi, Snowflake, Car, Waves] as const

/* Rooms showcase — reference: .room-check inside .room-availability spad.
   Left: one .room-item (3-photo carousel with charcoal prev/next buttons,
   "Junior Suite" title, "From $252" price, five feature icons, soft
   #ECECEC shadow). Right: the gold-bordered .check-form booking widget. */
export function Rooms() {
  return (
    <section aria-label={roomsSectionLabel} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <RoomCard />
          <BookingForm />
        </div>
      </div>
    </section>
  )
}

function RoomCard() {
  const [photo, setPhoto] = useState(0)

  const goTo = (next: number) => {
    setPhoto(((next % roomPhotoSeeds.length) + roomPhotoSeeds.length) % roomPhotoSeeds.length)
  }

  return (
    <article className="shadow-[2px_15px_75px_6px_#ECECEC]">
      <div className="relative overflow-hidden">
        <img
          key={roomPhotoSeeds[photo]}
          src={`https://picsum.photos/seed/${roomPhotoSeeds[photo]}/640/420`}
          alt={`${roomName} photo ${photo + 1}`}
          className="h-64 w-full object-cover sm:h-72 lg:h-80"
        />
        <button
          type="button"
          aria-label={roomPrevLabel}
          onClick={() => goTo(photo - 1)}
          className="absolute top-1/2 left-0 flex h-[69px] w-[52px] -translate-y-1/2 items-center justify-center bg-charcoal text-gold transition-colors hover:bg-black/70"
        >
          <ChevronLeft aria-hidden="true" className="h-8 w-8" />
        </button>
        <button
          type="button"
          aria-label={roomNextLabel}
          onClick={() => goTo(photo + 1)}
          className="absolute top-1/2 right-0 flex h-[69px] w-[52px] -translate-y-1/2 items-center justify-center bg-charcoal text-gold transition-colors hover:bg-black/70"
        >
          <ChevronRight aria-hidden="true" className="h-8 w-8" />
        </button>
      </div>

      <div className="p-9 lg:pb-[37px] lg:pl-[35px] lg:pr-[45px] lg:pt-[35px]">
        <div className="mb-9 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-serif text-3xl text-roomtitle">{roomName}</h2>
          <p className="flex items-baseline gap-2">
            <span className="text-sm text-roomtitle">{roomPriceFrom}</span>
            <span className="text-4xl font-normal text-ink">{roomPrice}</span>
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {roomFeatures.map((feature, index) => {
            const Icon = featureIcons[index]!
            return (
              <li key={feature.label} className="flex items-center gap-2">
                <Icon aria-hidden="true" className="h-5 w-5 text-gold" />
                <span className="text-sm text-ink">{feature.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

type QuantityKey = 'Adults' | 'Children' | 'Rooms'

function BookingForm() {
  const [quantities, setQuantities] = useState<Record<QuantityKey, number>>({
    Adults: 0,
    Children: 0,
    Rooms: 0,
  })

  const adjust = (key: QuantityKey, delta: number) => {
    setQuantities((current) => ({ ...current, [key]: Math.max(0, current[key] + delta) }))
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="border-2 border-gold-border p-8 sm:p-10 lg:p-12"
    >
      <h2 className="mb-10 font-serif text-3xl text-ink">{checkTitle}</h2>

      <div className="mb-12 flex flex-wrap gap-x-8 gap-y-6">
        <div>
          <p className="mb-2 text-sm text-ink">{dateFromLabel}</p>
          <div className="relative">
            <input
              type="text"
              defaultValue={datePlaceholder}
              aria-label={dateFromLabel}
              className="w-40 border-b border-underline bg-transparent pb-2 pr-8 text-sm font-semibold text-ink"
            />
            <Calendar aria-hidden="true" className="absolute right-0 bottom-2 h-4 w-4 text-gold" />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm text-ink">{dateToLabel}</p>
          <div className="relative">
            <input
              type="text"
              defaultValue={datePlaceholder}
              aria-label={dateToLabel}
              className="w-40 border-b border-underline bg-transparent pb-2 pr-8 text-sm font-semibold text-ink"
            />
            <Calendar aria-hidden="true" className="absolute right-0 bottom-2 h-4 w-4 text-gold" />
          </div>
        </div>
      </div>

      <div className="mb-9 flex flex-wrap gap-x-[60px] gap-y-6 lg:gap-x-[105px]">
        {quantityNames.map((name) => (
          <div key={name}>
            <p className="mb-2 text-sm text-ink">{name}</p>
            <div className="flex w-28 items-center justify-between border-b border-underline pb-1">
              <button
                type="button"
                aria-label={quantityDecreaseLabel(name)}
                onClick={() => adjust(name as QuantityKey, -1)}
                className="p-1 text-lg font-light text-ink transition-colors hover:text-gold"
              >
                <Minus aria-hidden="true" className="h-4 w-4" />
              </button>
              <input
                type="text"
                readOnly
                value={quantities[name as QuantityKey]}
                aria-label={quantityLabel(name)}
                className="w-8 bg-transparent text-center text-sm text-ink/50"
              />
              <button
                type="button"
                aria-label={quantityIncreaseLabel(name)}
                onClick={() => adjust(name as QuantityKey, 1)}
                className="p-1 text-lg font-light text-ink transition-colors hover:text-gold"
              >
                <Plus aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <label htmlFor="lodge-room-select" className="mb-2 block text-sm text-ink">
          {roomSelectLabel}
        </label>
        <select
          id="lodge-room-select"
          defaultValue={roomOptions[0]}
          className="w-full cursor-pointer border-b border-underline bg-transparent py-2 text-sm text-ink focus:outline-none"
        >
          {roomOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <GoldButton className="w-full sm:w-auto">{checkButtonLabel}</GoldButton>
    </form>
  )
}
