import { render, screen, within } from '@testing-library/react'
import { NAV } from '../lib/site'
import { NavRow } from './NavRow'

/** The row's own list — not the panels a submenu row hangs inside it. */
function topLevelItems(): HTMLElement[] {
  const list = screen
    .getByRole('navigation', { name: 'Primary' })
    .querySelector('ul') as HTMLElement

  return Array.from(list.children) as HTMLElement[]
}

/** The item's own label, without the panel a submenu row hangs inside it. */
function labelOf(item: HTMLElement): string | null {
  return (item.querySelector('a, button') as HTMLElement).textContent
}

describe('NavRow', () => {
  it('renders the seven items right-aligned in one row of bare black labels', () => {
    render(<NavRow />)

    const items = topLevelItems()

    expect(items).toHaveLength(7)
    expect(items.map(labelOf)).toEqual([
      'Home',
      'Services',
      'About Us',
      'Why Us',
      'Testimonials',
      'Blog',
      'Contact',
    ])

    const services = screen.getByRole('link', { name: 'Services' })

    expect(services).toHaveClass('inline-block', 'py-5', 'text-[16px]', 'text-black')
    expect(services).toHaveClass('hover:text-accent', 'transition-colors', 'duration-300')
    expect(services).not.toHaveClass('bg-accent', 'underline')
    expect(services.className).not.toContain('border')
  })

  it('marks the current destination and widens the chevron row', () => {
    render(<NavRow />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-accent')
    expect(screen.getByRole('link', { name: 'Blog' })).not.toHaveAttribute('aria-current')

    const trigger = screen.getByRole('button', { name: 'About Us' })

    expect(trigger).toHaveClass('pr-[20px]')
    expect(trigger.querySelector('svg')).not.toBeNull()
    expect(within(trigger).getByText('About Us')).toBeInTheDocument()
  })

  it('takes its items from the one navigation model', () => {
    render(<NavRow />)

    expect(NAV.map((node) => node.label)).toEqual(topLevelItems().map(labelOf))
  })
})
