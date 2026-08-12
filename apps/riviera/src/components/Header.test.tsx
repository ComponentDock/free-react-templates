import { describe, it, expect } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { BRAND, TAGLINE } from '../data'

describe('Header', () => {
  it('renders the text logo and tagline', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: BRAND })).toHaveAttribute('href', '#home')
    expect(screen.getByText(TAGLINE)).toBeInTheDocument()
  })

  it('renders the desktop nav links with Home active', () => {
    render(<Header />)
    const desktopNav = screen.getByRole('navigation', { name: 'Primary', hidden: true })
    const links = within(desktopNav).getAllByRole('link', { hidden: true })
    expect(links.map((link) => link.textContent)).toEqual([
      'Home',
      'About',
      'Rooms',
      'Pages',
      'News',
      'Contact',
    ])
    expect(links[0]).toHaveAttribute('aria-current', 'page')
  })

  it('renders the reservation CTA in the header', () => {
    render(<Header />)
    const cta = screen.getByRole('link', { name: 'Make a Reservation', hidden: true })
    expect(cta).toHaveAttribute('href', '#reservation')
  })

  it('opens the Pages dropdown on hover and closes it on leave', () => {
    render(<Header />)
    const desktopNav = screen.getByRole('navigation', { name: 'Primary', hidden: true })
    const pages = within(desktopNav).getByRole('link', { name: /Pages/ })
    expect(within(desktopNav).queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()

    fireEvent.mouseEnter(pages)
    expect(within(desktopNav).getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('link', { name: 'Services' })).toBeInTheDocument()

    fireEvent.mouseLeave(pages)
    expect(within(desktopNav).queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()
  })

  it('keeps the dropdown open while focus moves within it and closes on leave', () => {
    render(<Header />)
    const desktopNav = screen.getByRole('navigation', { name: 'Primary', hidden: true })
    const pages = within(desktopNav).getByRole('link', { name: /Pages/ })

    fireEvent.focus(pages)
    const aboutUs = within(desktopNav).getByRole('link', { name: 'About Us' })
    expect(aboutUs).toBeInTheDocument()

    fireEvent.blur(pages, { relatedTarget: aboutUs })
    expect(within(desktopNav).getByRole('link', { name: 'About Us' })).toBeInTheDocument()

    fireEvent.blur(pages, { relatedTarget: document.body })
    expect(within(desktopNav).queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu from the hamburger with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'News' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Make a Reservation' })).toHaveAttribute(
      'href',
      '#reservation',
    )

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a menu link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const newsLink = within(mobileNav).getByRole('link', { name: 'News' })
    newsLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(newsLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
