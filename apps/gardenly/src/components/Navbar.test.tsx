import { describe, expect, it } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the top bar with contact lines and social icons', () => {
    render(<Navbar />)
    expect(screen.getByText('Call Us: +10 (87) 263 3567')).toBeInTheDocument()
    expect(screen.getByText('info@gardening.example')).toBeInTheDocument()
    expect(screen.getByText('Mon - Fri: 9:00 - 19:00')).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /facebook|twitter|instagram|pinterest/i }),
    ).toHaveLength(4)
  })

  it('renders the brand, desktop nav links, search icon, and quote pill', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('opens the mobile menu and closes it via the toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu via Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.keyboard('a')
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    const servicesLink = within(dialog).getByRole('link', { name: 'Services' })
    servicesLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(servicesLink)
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the brand or quote link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    const brandLink = within(dialog).getByRole('link', { name: BRAND })
    brandLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(brandLink)
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialogAgain = screen.getByRole('dialog', { name: 'Mobile navigation' })
    const quoteLink = within(dialogAgain).getByRole('link', { name: 'Get Free Quote' })
    quoteLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(quoteLink)
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('turns sticky after scrolling past 50px', () => {
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    const { container } = render(<Navbar />)
    fireEvent.scroll(window)
    expect(container.querySelector('header')?.className).toContain('shadow-md')
  })
})
