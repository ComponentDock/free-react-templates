import { Image as ImageIcon } from 'lucide-react'

interface PhotoCountProps {
  photos: number
}

/**
 * The photo count sits inside the photograph, bottom right. It is decorative
 * text below the card-wide link overlay on purpose: the reference does not let
 * it be selected or clicked, and the pill is the only place the count appears.
 */
export function PhotoCount({ photos }: PhotoCountProps) {
  return (
    <span className="absolute right-3.5 bottom-3.5 inline-flex items-center gap-[5px] rounded-lg bg-[rgba(15,28,46,.72)] px-[9px] py-1 text-[12.5px] leading-[1.4] font-semibold text-white">
      <ImageIcon aria-hidden="true" size={15} strokeWidth={2} className="flex-none" />
      {photos} photos
    </span>
  )
}
