import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavRow } from './NavRow'
import { NAV } from '../lib/site'

/** The disclosure's row, and the plain rows either side of it. */
const DROPDOWN = NAV[1]!
const CURRENT = NAV[0]!
const PLAIN = NAV[2]!

/**
 * In-page anchors are neutralised before a press: jsdom turns a click on `href="#…"` into
 * hash navigation, which can race React's delegated handler and silently drop the test.
 */
function neutralize(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('NavRow — one row in whichever presentation the width calls for', () => {
  it('draws a wide row with its gold slab held out on the row the page is on', () => {
    render(
      <ul>
        <NavRow item={CURRENT} variant="desktop" onNavigate={() => {}} />
      </ul>,
    )

    const row = screen.getByRole('link', { name: CURRENT.label })

    expect(row).toHaveAttribute('aria-current', 'page')
    expect(row.className).toContain('text-[11px]')
    expect(row.className).toContain('px-5')
    expect(row.className).toContain('py-6')

    const slab = row.querySelector('span[aria-hidden="true"]')

    expect(slab?.className).toContain('bg-gold')
    expect(slab?.className).toContain('scale-x-100')
    expect(slab?.className).toContain('-z-10')
  })

  it('draws every other wide row with its slab folded away behind the hover', () => {
    render(
      <ul>
        <NavRow item={PLAIN} variant="desktop" onNavigate={() => {}} />
      </ul>,
    )

    const row = screen.getByRole('link', { name: PLAIN.label })
    const slab = row.querySelector('span[aria-hidden="true"]')

    expect(row).not.toHaveAttribute('aria-current')
    expect(slab?.className).toContain('scale-x-0')
    expect(slab?.className).toContain('group-hover:scale-x-100')
  })

  it('reports an activation, so its presentation can react', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(
      <ul>
        <NavRow item={PLAIN} variant="desktop" onNavigate={onNavigate} />
      </ul>,
    )

    const row = screen.getByRole('link', { name: PLAIN.label })

    neutralize(row)
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('draws a folded row as a full width block with no slab at all', () => {
    render(
      <ul>
        <NavRow item={CURRENT} variant="panel" onNavigate={() => {}} />
        <NavRow item={PLAIN} variant="panel" onNavigate={() => {}} />
      </ul>,
    )

    const current = screen.getByRole('link', { name: CURRENT.label })
    const plain = screen.getByRole('link', { name: PLAIN.label })

    expect(current.className).toContain('text-gold')
    expect(plain.className).toContain('text-panel-row')
    expect(current.className).toContain('w-full')
    expect(current.querySelector('span[aria-hidden="true"]')).toBeNull()
    expect(plain.querySelector('span[aria-hidden="true"]')).toBeNull()
  })

  it('hands a disclosing row to the wide disclosure, and to the folded group below 992px', () => {
    const { unmount } = render(
      <ul>
        <NavRow item={DROPDOWN} variant="desktop" onNavigate={() => {}} />
      </ul>,
    )

    expect(screen.getByTestId('chandlery-row')).toBeInTheDocument()
    expect(screen.queryByTestId('chandlery-panel')).toBeNull()

    unmount()

    render(
      <ul>
        <NavRow item={DROPDOWN} variant="panel" onNavigate={() => {}} />
      </ul>,
    )

    expect(within(screen.getByTestId('chandlery-panel')).getAllByRole('link')).toHaveLength(4)
    expect(screen.getByRole('link', { name: DROPDOWN.label })).not.toHaveAttribute('aria-expanded')
    expect(screen.getByRole('link', { name: DROPDOWN.label }).querySelector('svg')).not.toBeNull()
  })
})
