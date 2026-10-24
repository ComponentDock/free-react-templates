import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  categoriesSubmenu,
  contactEmail,
  homeMenu,
  navLinks,
  searchPlaceholder,
  siteName,
  tagline,
  welcomeText,
} from '../data'

describe('Navbar', () => {
  it('renders the italic welcome bar with a greeting and a mail link', () => {
    render(<Navbar />)
    expect(screen.getByText(welcomeText)).toBeInTheDocument()
    const mail = screen.getByRole('link', { name: contactEmail })
    expect(mail).toHaveAttribute('href', `mailto:${contactEmail}`)
  })

  it('renders the header search form with a labelled input', () => {
    render(<Navbar />)
    const search = screen.getByRole('search')
    expect(within(search).getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
    expect(within(search).getByRole('button', { name: searchPlaceholder })).toHaveAttribute(
      'type',
      'submit',
    )
    fireEvent.submit(search)
    expect(search).toBeInTheDocument()
  })

  it('renders the script wordmark with the personal blog tagline', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toHaveAttribute(
      'href',
      '#top',
    )
    expect(screen.getByText(tagline)).toBeInTheDocument()
  })

  it('renders every primary nav link plus the Home dropdown trigger', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Home/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    for (const label of navLinks.filter((item) => item !== 'Home')) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.queryByRole('list', { name: 'Home submenu' })).not.toBeInTheDocument()
  })

  it('opens the Home dropdown with its items and the nested category submenu', () => {
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: /Home/ })
    fireEvent.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const submenu = screen.getByRole('list', { name: 'Home submenu' })
    for (const item of homeMenu) {
      expect(within(submenu).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.href,
      )
    }
    for (const item of categoriesSubmenu) {
      expect(within(submenu).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.href,
      )
    }

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('list', { name: 'Home submenu' })).not.toBeInTheDocument()
  })

  it('closes the dropdown when one of its links is followed', () => {
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: /Home/ })

    fireEvent.click(trigger)
    fireEvent.click(
      within(screen.getByRole('list', { name: 'Home submenu' })).getByRole('link', {
        name: 'Featured',
      }),
    )
    expect(screen.queryByRole('list', { name: 'Home submenu' })).not.toBeInTheDocument()

    fireEvent.click(trigger)
    fireEvent.click(
      within(screen.getByRole('list', { name: 'Home submenu' })).getByRole('link', {
        name: 'Travel',
      }),
    )
    expect(screen.queryByRole('list', { name: 'Home submenu' })).not.toBeInTheDocument()
  })

  it('renders five social icon links in the top bar', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Vimeo', 'Pinterest']) {
      expect(within(banner).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(banner).getAllByRole('listitem').length).toBeGreaterThanOrEqual(5)
  })

  it('toggles the mobile menu and closes it when a link is activated', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(toggle)

    const closeToggle = screen.getByRole('button', { name: 'Close menu' })
    expect(closeToggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const mobileLinks = within(mobileNav).getAllByRole('link', { name: 'Contact' })
    expect(mobileLinks).toHaveLength(1)

    fireEvent.click(mobileLinks[0]!)

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('lists the category submenu inside the mobile panel as well', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const travel = within(mobileNav).getByRole('link', { name: 'Travel' })
    expect(travel).toHaveAttribute('href', '#categories')
    fireEvent.click(travel)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
