import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo, nav links and Donate button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Synod/ })).toHaveAttribute('href', '#home')

    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primaryNav).getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about',
    )
    expect(screen.getByRole('link', { name: 'Donate' })).toHaveAttribute('href', '#donate')
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)

    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('block')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('hidden')
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('block')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobileNav).getByText('Ministries'))

    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('hidden')
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})
