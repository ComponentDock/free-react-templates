import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand wordmark with the real-estate subtitle', () => {
    render(<Navbar />)
    expect(screen.getByText('Estately')).toBeInTheDocument()
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
  })

  it('renders all six nav links, Sign in, and the outlined Join us action', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About', 'Buy', 'Pages', 'News', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Join us' }).length).toBeGreaterThanOrEqual(1)
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pages = screen.getAllByRole('link', { name: 'Pages' })[0]!
    // Neutralize jsdom hash navigation (native listeners run before React's).
    pages.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(pages)
    for (const item of ['About Us', 'Search Result', 'Property']) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }

    pages.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(pages)
    expect(screen.queryByText('About Us')).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu with the hamburger toggler', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggler = screen.getByRole('button', { name: 'Open menu' })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBe(2)

    await user.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a mobile link is followed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggler = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggler)

    const mobileLink = screen.getAllByRole('link', { name: 'About' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile Join us link is followed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggler = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggler)

    const mobileJoin = screen.getAllByRole('link', { name: 'Join us' })[1]!
    mobileJoin.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileJoin)

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })
})
