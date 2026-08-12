import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the brand, nav links, phone pill and search button', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /^Barbell$/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Classes' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText('+546 990221 123')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('marks Home as the active link', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'About us' })).not.toHaveAttribute('aria-current')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Classes' })).toBeInTheDocument()

    // Native listener runs before React's delegated onClick, neutralizing
    // jsdom hash-navigation so the link's close handler still fires.
    const link = within(mobileNav).getByRole('link', { name: 'Classes' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles the search overlay from the search button and closes it', async () => {
    const user = userEvent.setup()
    render(<Header />)
    expect(screen.queryByPlaceholderText('Search here.....')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByPlaceholderText('Search here.....')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByPlaceholderText('Search here.....')).not.toBeInTheDocument()
  })
})
