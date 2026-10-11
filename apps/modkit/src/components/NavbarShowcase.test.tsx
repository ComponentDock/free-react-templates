import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavbarShowcase } from './NavbarShowcase'

describe('NavbarShowcase', () => {
  it('renders the six tinted demo bars with brand, links, and dropdowns', () => {
    render(<NavbarShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Navbar')

    const bars = screen.getAllByRole('navigation')
    expect(bars).toHaveLength(6)
    expect(bars[0]).toHaveAccessibleName('primary navbar demo')
    expect(bars[0]!.className).toContain('bg-kit-primary')
    expect(bars[0]!.className).toContain('shadow-bar-primary')
    expect(bars[5]!.className).toContain('bg-transparent')

    expect(screen.getAllByText('Brand')).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(6)
    expect(screen.getAllByText('Disabled')).toHaveLength(6)
    expect(screen.getAllByRole('button', { name: /dropdown link/i })).toHaveLength(6)
  })

  it('opens, switches, and closes the navbar dropdowns', async () => {
    const user = userEvent.setup()
    render(<NavbarShowcase />)

    const toggles = screen.getAllByRole('button', { name: /dropdown link/i })

    await user.click(toggles[2]!)
    expect(toggles[2]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('button', { name: 'Another action' })).toHaveLength(1)

    await user.click(toggles[2]!)
    expect(toggles[2]).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggles[2]!)
    await user.click(screen.getByRole('button', { name: 'Something else here' }))
    expect(toggles[2]).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the search treatment on the transparent bar only', () => {
    const { container } = render(<NavbarShowcase />)

    const search = screen.getByRole('search')
    expect(container.querySelectorAll('form')).toHaveLength(1)

    expect(screen.getByPlaceholderText('Search')).toHaveAttribute('type', 'search')
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()

    expect(fireEvent.submit(search)).toBe(false)
  })
})
