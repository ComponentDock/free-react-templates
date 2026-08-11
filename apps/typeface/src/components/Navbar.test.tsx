import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the plain links with Home marked active', () => {
    render(<Navbar menuOpen={false} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getAllByRole('link', { name: 'Business' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('toggles the Travel dropdown open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar menuOpen={false} />)
    const travel = screen.getByRole('button', { name: 'Travel' })
    expect(travel).toHaveAttribute('aria-expanded', 'false')

    await user.click(travel)
    expect(travel).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Asia' })).toBeInTheDocument()

    await user.click(travel)
    expect(travel).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches between the two dropdowns', async () => {
    const user = userEvent.setup()
    render(<Navbar menuOpen={false} />)
    await user.click(screen.getByRole('button', { name: 'Categories' }))
    expect(screen.getByRole('button', { name: 'Categories' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('link', { name: 'Lifestyle' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Travel' }))
    expect(screen.getByRole('button', { name: 'Travel' })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Categories' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('renders the mobile collapse with dropdown children when open', () => {
    const { rerender } = render(<Navbar menuOpen={false} />)
    // Desktop nav renders one copy of each link (dropdown children included).
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Asia' })).toHaveLength(1)

    rerender(<Navbar menuOpen={true} />)
    // The mobile collapse adds a second copy of every link.
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Asia' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'South America' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Lifestyle' })).toHaveLength(2)
  })
})
