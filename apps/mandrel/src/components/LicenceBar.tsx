import { LICENCE_ITEMS } from '../content'
import { Container } from './ui'

/**
 * 37 px credential strip above the nav, in flow: three pairs the contractor
 * would paint on the van, the last two dropping below `sm` so the licence
 * number always survives.
 */
export function LicenceBar() {
  return (
    <div data-licence-bar className="w-full border-b border-ink-700 bg-ink-800 text-ink-100">
      <Container className="flex h-9 items-center">
        <ul className="flex min-w-0 items-center gap-4 text-xs leading-4">
          {LICENCE_ITEMS.map((item, index) => (
            <li
              key={item.value}
              className={
                index === 0
                  ? 'truncate font-semibold'
                  : 'hidden truncate border-l border-white/20 pl-4 font-semibold sm:block'
              }
              data-licence-item
            >
              {item.value}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
