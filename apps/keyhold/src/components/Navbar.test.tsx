import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

const links = ['Home', 'About', 'Services', 'Agent', 'Listing', 'Blog', 'Contact'] as const

describe('Navbar', () => {
  it('renders the brand and all desktop navigation links', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: /keyhold home/i })
    expect(brand).toHaveTextContent('Keyhold')

    for (const label of links) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('opens the mobile menu on toggle and closes it via the close control', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Desktop links are always rendered; the mobile panel appears on toggle.
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: /menu/i }))
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /menu/i }))
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2)

    const blogLink = screen.getAllByRole('link', { name: 'Blog' })[1]!
    // Neutralize jsdom hash-navigation (native listeners run before React's
    // delegated handler, so the onClick close still fires).
    blogLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(blogLink)
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(1)
  })
})
