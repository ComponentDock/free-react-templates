import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavDropdown } from './NavDropdown'
import { NAV, isParent, type NavParent } from '../lib/site'

/** The drop-down row the panel under "About" is built from. */
function parentRow(label: string): NavParent {
  const node = NAV.filter(isParent).find((entry) => entry.label === label)
  if (!node) throw new Error(`the ${label} row is missing from NAV`)
  return node
}

const about = parentRow('About')

/**
 * jsdom does not apply Tailwind's visibility utilities, so a closed panel is
 * asserted through its classes and its `aria-hidden` state; the panel's rows are
 * only reachable through role queries once it is open.
 */
describe('NavDropdown', () => {
  it('keeps its panel shut, unannounced and out of the way until it is opened', () => {
    render(
      <ul>
        <NavDropdown node={about} stuck={false} />
      </ul>,
    )

    const trigger = screen.getByRole('link', { name: 'About' })
    const panel = document.getElementById('menu-about')

    expect(trigger).toHaveAttribute('href', '#about')
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', 'menu-about')
    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(panel).toHaveClass('invisible', 'mt-5', 'opacity-0', 'border-t-2', 'border-brand')
    expect(screen.queryByRole('link', { name: 'Team' })).toBeNull()
  })

  it('opens the white panel on hover and shuts it again on leave', async () => {
    const user = userEvent.setup()
    render(
      <ul>
        <NavDropdown node={about} stuck={false} />
      </ul>,
    )
    const trigger = screen.getByRole('link', { name: 'About' })

    await user.hover(trigger)

    const panel = screen.getByRole('link', { name: 'Team' }).closest('ul') as HTMLElement
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(panel).toHaveClass('visible', 'mt-0', 'opacity-100', 'shadow-dropdown')

    for (const label of ['Team', 'Pricing', 'FAQ', 'Gallery', 'Services', 'Testimonials', 'More']) {
      expect(within(panel).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(panel).getByRole('link', { name: 'Team' })).toHaveClass('py-[9px]', 'px-5')

    await user.unhover(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('menu-about')).toHaveClass('invisible')
  })

  it('flies the third level out of its own row at left:100%', async () => {
    const user = userEvent.setup()
    render(
      <ul>
        <NavDropdown node={about} stuck={false} />
      </ul>,
    )

    await user.hover(screen.getByRole('link', { name: 'About' }))
    const more = screen.getByRole('link', { name: 'More' })

    expect(more).toHaveAttribute('aria-controls', 'menu-more')
    expect(document.getElementById('menu-more')).toHaveClass('top-0', 'left-full')

    await user.hover(more)

    const flyout = document.getElementById('menu-more') as HTMLElement
    expect(flyout).toHaveClass('visible', 'mt-0', 'opacity-100', 'left-full', 'top-0')
    expect(within(flyout).getByRole('link', { name: 'Photo tour' })).toHaveAttribute(
      'href',
      '#gallery',
    )
    expect(within(flyout).getByRole('link', { name: 'Plan compare' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(within(flyout).getByRole('link', { name: 'Questions' })).toHaveAttribute('href', '#faq')
  })

  it('opens on focus, stays open while tabbing inside and closes on Escape', async () => {
    const user = userEvent.setup()
    render(
      <>
        <ul>
          <NavDropdown node={about} stuck={false} />
        </ul>
        <button type="button">Elsewhere</button>
      </>,
    )
    const trigger = screen.getByRole('link', { name: 'About' })

    await user.tab()
    expect(document.activeElement).toBe(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{ArrowDown}')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    screen.getByRole('link', { name: 'Team' }).focus()
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    act(() => trigger.focus())
    await user.keyboard('{Escape}')

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(trigger)

    await user.click(screen.getByRole('button', { name: 'Elsewhere' }))
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('follows the pinned bar into ink', () => {
    render(
      <ul>
        <NavDropdown node={about} stuck />
      </ul>,
    )

    expect(screen.getByRole('link', { name: 'About' })).toHaveClass('text-ink')
  })
})
