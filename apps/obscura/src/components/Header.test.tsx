import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Header } from './Header'

const socialLabels = ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance']
const menuLabels = ['Home', 'About the Artist', 'Portfolio', 'News', 'Contact']

describe('Header', () => {
  it('shows the site name inside a thin white border box linking to the hero', () => {
    render(<Header />)
    const logo = screen.getByRole('link', { name: 'Obscura' })
    expect(logo).toHaveAttribute('href', '#home')
    expect(logo).toHaveClass('border-white')
  })

  it('shows five white brand icon links with accessible names', () => {
    render(<Header />)
    for (const label of socialLabels) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveClass('text-white')
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('shows the uppercase menu links', () => {
    render(<Header />)
    for (const label of menuLabels) {
      const links = screen.getAllByRole('link', { name: label })
      expect(links.length).toBeGreaterThan(0)
    }
  })

  it('opens a mobile menu from the hamburger and closes it with the close control', () => {
    render(<Header />)
    const openButton = screen.getByRole('button', { name: 'Open menu', hidden: true })
    expect(openButton).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(openButton)

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of menuLabels) {
      expect(within(mobileNav).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        expect.stringContaining('#'),
      )
    }
    expect(openButton).toHaveAttribute('aria-expanded', 'true')

    const closeButton = screen.getByRole('button', { name: 'Close menu', hidden: true })
    fireEvent.click(closeButton)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a navigation link is chosen', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
