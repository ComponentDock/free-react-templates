import { Attribution } from './Attribution'
import { Countdown } from './Countdown'
import { Headline } from './Headline'
import { Monogram } from './Monogram'
import { Shell } from './Shell'
import { SocialRow } from './SocialRow'

/**
 * The full poster: a centred column (monogram · headline · countdown), with the
 * social row and the credit line pinned as siblings inside the same shell.
 */
export function Foretaste() {
  return (
    <Shell>
      <main
        data-testid="column"
        className="flex flex-col items-center pt-[160px] pb-[215px] max-[576px]:pt-[80px] max-[576px]:pb-[100px]"
      >
        <Monogram />
        <Headline />
        <Countdown />
      </main>
      <SocialRow />
      <Attribution className="absolute inset-x-0 bottom-0 text-center" />
    </Shell>
  )
}
