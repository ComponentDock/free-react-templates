import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BRAND, isGroup, NAV } from '../lib/site'
import { Header } from './Header'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the header', () => {
  it('carries the wordmark, the label row, a search control and the menu toggle', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('link', { name: `${BRAND} — home` })).toBeInTheDocument()
    expect(screen.getByText(BRAND)).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const item of NAV) {
      if (isGroup(item)) {
        continue
      }
      expect(within(nav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('button', { name: 'Pages' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Search this page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open the menu' })).toBeInTheDocument()
    expect(container.querySelector('.h-\\[100px\\]')).not.toBeNull()
  })

  it('marks the band the page is standing on and leaves the rest on the ink', () => {
    render(<Header />)

    const home = screen.getByRole('link', { name: 'Home' })

    expect(tokens(home)).toContain('text-brand')
    expect(home).toHaveAttribute('aria-current', 'page')

    const story = screen.getByRole('link', { name: 'Our Story' })

    expect(tokens(story)).toContain('text-ink')
    expect(story).not.toHaveAttribute('aria-current')
  })

  it('sits in the band above the hero rather than pinning itself to the viewport', () => {
    render(<Header />)

    const header = tokens(screen.getByRole('banner'))

    expect(header).toContain('absolute')
    expect(header).not.toContain('fixed')
    expect(header).not.toContain('sticky')
  })

  it('opens the Pages panel on hover and folds it away again', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: 'Pages' })
    const panel = document.getElementById('pages-panel') as HTMLElement

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(tokens(panel)).toContain('invisible')

    await user.hover(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(tokens(panel)).toContain('visible')
    expect(within(panel).getByRole('link', { name: 'Bridesmaid' })).toHaveAttribute(
      'href',
      '#attendants',
    )

    await user.unhover(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(tokens(panel)).toContain('invisible')
  })

  it('opens the Pages panel from the keyboard and from a click', () => {
    render(<Header />)

    const trigger = screen.getByRole('button', { name: 'Pages' })

    fireEvent.focusIn(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('folds the label row into a menu that a link inside it closes', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    expect(container.querySelector('#folded-menu')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))

    const folded = container.querySelector('#folded-menu') as HTMLElement
    expect(folded).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(within(folded).getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    fireEvent.click(within(folded).getByRole('link', { name: 'Contact' }))

    expect(container.querySelector('#folded-menu')).toBeNull()
    expect(screen.getByRole('button', { name: 'Open the menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens a search row that submits in place, and closes it again', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    expect(container.querySelector('#page-search')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Search this page' }))

    const form = screen.getByRole('search')

    expect(form).toBeInTheDocument()
    expect(screen.getByLabelText('Search the site')).toHaveAttribute('placeholder', 'Search the site')
    expect(fireEvent.submit(form)).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Close the search row' }))

    expect(container.querySelector('#page-search')).toBeNull()
  })
})
