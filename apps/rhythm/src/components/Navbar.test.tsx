import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo, nav links and social icons', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Rhythm' })).toHaveAttribute('href', '#home')

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    for (const label of ['About', 'Discography', 'Tours', 'Videos', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        expect.stringMatching(/^#/),
      )
    }

    for (const social of ['Facebook', 'Twitter', 'Instagram', 'Dribbble']) {
      expect(screen.getByRole('link', { name: social })).toHaveAttribute(
        'href',
        expect.stringContaining('http'),
      )
    }
  })

  it('opens and closes the Pages dropdown with its three items', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: /Pages/ }))

    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()

    // Toggling again closes the dropdown.
    fireEvent.click(screen.getByRole('button', { name: /Pages/ }))
    expect(screen.queryByRole('link', { name: 'Blog' })).not.toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)
  })

  it('opens and closes the mobile menu with the hamburger', () => {
    render(<Navbar />)

    // Mobile nav is absent until the hamburger is activated.
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    for (const label of ['About', 'Discography', 'Tours', 'Videos', 'Contact']) {
      expect(within(mobileNav).getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(
        1,
      )
    }
    for (const item of ['About', 'Blog', 'Blog Details']) {
      expect(within(mobileNav).getAllByRole('link', { name: item }).length).toBeGreaterThanOrEqual(
        1,
      )
    }

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link inside it is activated', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    let mobileNav = screen.getByRole('navigation', { name: 'Mobile' })

    // Activating a plain nav link closes the menu.
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    // Reopen and activate a Pages dropdown item — also closes the menu.
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Blog Details' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
