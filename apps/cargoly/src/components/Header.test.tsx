import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { DELIVERY_SUBMENU, NAV_LINKS } from '../data'

describe('Header', () => {
  it('renders the sticky header with the logo and truck icon', () => {
    const { container } = render(<Header />)

    const logo = screen.getByRole('link', { name: 'Cargoly' })
    expect(logo).toHaveTextContent('Cargoly')
    expect(logo.querySelector('svg')).not.toBeNull()
    expect(container.querySelector('header')).toHaveClass('sticky')
  })

  it('renders the uppercase nav links and the search icon', () => {
    render(<Header />)

    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Search' })).toBeInTheDocument()
  })

  it('opens and closes the Delivery dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)

    expect(screen.queryByRole('link', { name: 'Blog' })).not.toBeInTheDocument()

    await user.hover(screen.getByRole('link', { name: 'Delivery' }))
    for (const subLink of DELIVERY_SUBMENU) {
      expect(screen.getByRole('link', { name: subLink })).toBeInTheDocument()
    }

    await user.unhover(screen.getByRole('link', { name: 'Delivery' }))
    expect(screen.queryByRole('link', { name: 'Single Blog' })).not.toBeInTheDocument()
  })

  it('opens and closes the Delivery dropdown on focus and blur', () => {
    render(<Header />)

    const delivery = screen.getByRole('link', { name: 'Delivery' })
    fireEvent.focus(delivery)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    fireEvent.blur(delivery)
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu from the hamburger control', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    for (const link of NAV_LINKS) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(1)
    }

    fireEvent.click(screen.getAllByRole('link', { name: 'About' })[1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
