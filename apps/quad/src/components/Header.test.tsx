import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the Quad wordmark with a gold book icon and the six centered nav links', () => {
    render(<Header />)

    const wordmark = screen.getByRole('link', { name: /Quad/ })
    expect(wordmark).toHaveClass('text-primary')
    expect(wordmark.querySelector('svg.lucide-book-open')).toHaveClass('text-accent')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual([
      'Home',
      'About',
      'Courses',
      'Elements',
      'Blog',
      'Contact',
    ])
    expect(links[0]).toHaveAttribute('aria-current', 'true')
    expect(links[0]).toHaveClass('text-accent')
    expect(links[1]).toHaveClass('text-primary')
  })

  it('toggles the search bar open and closed with the search icon', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const searchToggle = screen.getByRole('button', { name: 'Open search' })
    expect(searchToggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByLabelText('Search Here')).not.toBeInTheDocument()

    await user.click(searchToggle)
    expect(searchToggle).toHaveAttribute('aria-expanded', 'true')
    const input = screen.getByLabelText('Search Here')
    expect(input).toHaveAttribute('placeholder', 'Search Here')

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByLabelText('Search Here')).not.toBeInTheDocument()
  })

  it('closes the search bar when the search form is submitted', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    await user.type(screen.getByLabelText('Search Here'), 'courses')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.queryByLabelText('Search Here')).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu with the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuToggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(1)

    await user.click(menuToggle)
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true')
    expect(menuToggle.querySelector('svg.lucide-x')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    await user.click(menuToggle)
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
    expect(menuToggle.querySelector('svg.lucide-menu')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const mobileHomeLink = screen.getAllByRole('link', { name: 'Home' })[1]
    fireEvent.click(mobileHomeLink!)

    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
