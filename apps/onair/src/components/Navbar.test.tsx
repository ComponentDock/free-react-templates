import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /OnAir/ })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Shows', 'Charts', 'Podcasts', 'Events', 'Blog']
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('has a search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)

    // Mobile nav should now be visible
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()

    // Click again to close
    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })
})
