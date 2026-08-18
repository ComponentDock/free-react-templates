import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, nav links, and Join Now button', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: /hiredly/i })
    expect(brand).toBeInTheDocument()
    expect(brand.textContent).toContain('Hiredly')

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Job' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join Now' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu via the hamburger toggle', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    // Tapping a mobile link closes the menu
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    // The close button also closes the menu
    fireEvent.click(toggle)
    fireEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('expands the Blog submenu inside the mobile menu and closes the menu on selection', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })

    const mobileBlog = within(mobileNav).getByRole('button', { name: 'Blog' })
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(mobileBlog)
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()

    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Elements' }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    // The mobile Join Now button also closes the menu
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: /mobile/i })).getByRole('link', {
        name: 'Join Now',
      }),
    )
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('expands and collapses the Blog dropdown', () => {
    render(<Navbar />)

    const blogToggle = screen.getByRole('button', { name: 'Blog' })
    expect(blogToggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Blog Details')).not.toBeInTheDocument()

    fireEvent.click(blogToggle)
    expect(blogToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Blog Details')).toBeInTheDocument()
    expect(screen.getByText('Elements')).toBeInTheDocument()

    // Selecting a dropdown item closes the dropdown
    fireEvent.click(screen.getByRole('link', { name: 'Elements' }))
    expect(blogToggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Blog Details')).not.toBeInTheDocument()

    fireEvent.click(blogToggle)
    expect(blogToggle).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(blogToggle)
    expect(blogToggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Blog Details')).not.toBeInTheDocument()
  })

  it('keeps the Join Now button styled as a white outline CTA', () => {
    render(<Navbar />)
    const joinNow = screen.getByRole('link', { name: 'Join Now' })
    expect(joinNow.className).toContain('border')
    expect(joinNow.className).toContain('text-brand')
  })
})
