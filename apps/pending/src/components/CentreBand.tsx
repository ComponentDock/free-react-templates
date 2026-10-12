import { cn } from '@free-react-templates/ui'
import { Heading } from './Heading'
import { PlayButton } from './PlayButton'

export interface CentreBandProps {
  className?: string
}

/**
 * The centre band: a both-axes-centred column holding only the brush-script
 * headline and the circular play control beneath it.
 */
export function CentreBand({ className }: CentreBandProps) {
  return (
    <div
      data-testid="centre-band"
      className={cn(
        'flex flex-col items-center justify-center px-[15px] pt-[80px] pb-[90px]',
        className,
      )}
    >
      <Heading />

      <div>
        <PlayButton />
      </div>
    </div>
  )
}
