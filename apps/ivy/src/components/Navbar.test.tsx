import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders all six nav links, the search input and the search button', () => {
    render(<Navbar />)
    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(screen.getByLabelText('Search site')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('toggles the mobile menu with aria-expanded', () => {
    render(<Navbar />)
    const burger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const link of NAV_LINKS) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }

    fireEvent.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Courses' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
