import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV, isParent, type NavParent } from '../lib/site'
import { NavDropdown } from './NavDropdown'

function aboutNode(): NavParent {
  const node = NAV.filter(isParent).find((item) => item.label === 'About Us')

  if (!node) {
    throw new Error('NAV no longer carries the About Us submenu')
  }

  return node
}

function renderBar() {
  return render(
    <ul>
      <NavDropdown node={aboutNode()} variant="bar" />
    </ul>,
  )
}

function panelOf(trigger: HTMLElement): HTMLElement {
  return trigger.parentElement?.querySelector('ul') as HTMLElement
}

describe('NavDropdown (bar)', () => {
  it('ships shut: hidden, transparent, 20px lower, with no pointer triangle', () => {
    renderBar()

    const trigger = screen.getByRole('button', { name: 'About Us' })
    const panel = panelOf(trigger)

    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', panel.id)
    expect(trigger).toHaveClass('pr-[20px]')
    expect(trigger.querySelector('svg')).toHaveClass('absolute', 'right-0', '-translate-y-1/2')

    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(panel.className.split(' ')).toEqual(
      expect.arrayContaining([
        'absolute',
        'top-full',
        'left-0',
        'bg-white',
        'border-t-2',
        'border-accent',
        'shadow-dropdown',
        'invisible',
        'opacity-0',
        'mt-5',
      ]),
    )
    expect(panel.className).not.toContain('before:')
    expect(panel.className).not.toContain('left-full')
  })

  it('opens flush and opaque on hover, and closes again when the pointer leaves', async () => {
    const user = userEvent.setup()

    renderBar()

    const trigger = screen.getByRole('button', { name: 'About Us' })
    const panel = panelOf(trigger)

    await user.hover(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger).toHaveClass('text-accent')
    expect(trigger.querySelector('svg')).toHaveClass('rotate-180')
    expect(panel).toHaveAttribute('aria-hidden', 'false')
    expect(panel.className.split(' ')).toEqual(
      expect.arrayContaining(['visible', 'mt-0', 'opacity-100']),
    )
    expect(panel.className).not.toContain('mt-5')

    await user.unhover(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(panel.className.split(' ')).toContain('invisible')
  })

  it('opens on keyboard focus and on click', async () => {
    const user = userEvent.setup()

    renderBar()

    const trigger = screen.getByRole('button', { name: 'About Us' })

    await user.tab()

    expect(trigger).toHaveFocus()
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(trigger, { key: 'a' })
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes on Escape, hands focus back, and stays shut through that hand-back', async () => {
    const user = userEvent.setup()

    renderBar()

    const trigger = screen.getByRole('button', { name: 'About Us' })

    await user.tab()
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()

    // The panel just handed focus back: the next focus must be swallowed, and the
    // one after it must open the panel again as usual.
    fireEvent.focus(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    fireEvent.focus(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('lists rows at 9px/20px that wash soft on hover and take the accent when current', async () => {
    const user = userEvent.setup()

    renderBar()

    const panel = panelOf(screen.getByRole('button', { name: 'About Us' }))
    const rows = Array.from(panel.children) as HTMLElement[]

    expect(rows).toHaveLength(4)

    await user.hover(screen.getByRole('button', { name: 'About Us' }))

    const team = screen.getByRole('link', { name: 'Our Team' })

    expect(team).toHaveClass('px-5', 'py-[9px]', 'text-[16px]', 'hover:bg-soft', 'hover:text-muted')
    expect(team).toHaveClass('text-accent', 'bg-soft')
    expect(team).toHaveAttribute('aria-current', 'page')

    const faq = screen.getByRole('link', { name: 'FAQ' })

    expect(faq).toHaveClass('text-black')
    expect(faq).not.toHaveAttribute('aria-current')

    for (const row of rows) {
      expect(row).toHaveClass('min-w-[200px]')
    }
  })
})

describe('NavDropdown (nested row)', () => {
  it('opens its panel beside the row, top-aligned, with a right chevron on the trigger', async () => {
    const user = userEvent.setup()

    renderBar()

    await user.hover(screen.getByRole('button', { name: 'About Us' }))

    const more = screen.getByRole('button', { name: 'More' })
    const panel = panelOf(more)

    expect(more).toHaveClass('flex', 'items-center', 'justify-between')
    expect(more.querySelector('svg')).not.toBeNull()
    expect(panel.className.split(' ')).toEqual(expect.arrayContaining(['top-0', 'left-full']))
    expect(panel.className).not.toContain('top-full')

    await user.hover(more)
    expect(panel).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute('href', '#careers')
    expect(screen.getByRole('link', { name: 'Press' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Partners' })).toBeInTheDocument()

    await user.unhover(more)
    expect(panel).toHaveAttribute('aria-hidden', 'true')
  })
})
