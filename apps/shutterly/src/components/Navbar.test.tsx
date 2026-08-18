import { describe, expect, it, afterEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { act } from 'react'
import { Navbar } from './Navbar'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true, writable: true })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('Navbar', () => {
  afterEach(() => {
    setScrollY(0)
  })

  it('renders the brand, nav links, an active Home link, and social icons', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: /shutterly/i })
    expect(brand).toBeInTheDocument()
    expect(brand.textContent).toContain('Shutterly')

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Portfolios' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    for (const label of ['Facebook', 'X', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: `${label} profile` })).toBeInTheDocument()
    }

    expect(screen.getByRole('banner')).toHaveClass('bg-transparent')
  })

  it('switches from transparent to solid styling on scroll and back', () => {
    render(<Navbar />)

    setScrollY(120)
    expect(screen.getByRole('banner')).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: /shutterly/i })).toHaveClass('text-ink')

    setScrollY(0)
    expect(screen.getByRole('banner')).toHaveClass('bg-transparent')
    expect(screen.getByRole('link', { name: /shutterly/i })).toHaveClass('text-white')
  })

  it('expands and collapses the Blog dropdown on desktop', () => {
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
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Portfolios' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    // The close button closes the menu
    fireEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    // Tapping a mobile link also closes the menu
    fireEvent.click(toggle)
    fireEvent.click(
      within(screen.getByRole('navigation', { name: /mobile/i })).getByRole('link', {
        name: 'Contact',
      }),
    )
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('toggles the Blog submenu inside the mobile menu', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })

    const mobileBlog = within(mobileNav).getByRole('button', { name: 'Blog' })
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(mobileBlog)
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()

    // Collapse the submenu again (menu stays open)
    fireEvent.click(mobileBlog)
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'false')
    expect(within(mobileNav).queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    // Reopen and select an item to close the whole menu
    fireEvent.click(mobileBlog)
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Elements' }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })
})
