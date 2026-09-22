import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  const defaultProps = {
    mobileMenuOpen: false,
    onToggleMenu: () => {},
    onCloseMenu: () => {},
  }

  it('renders the logo linking to home', () => {
    render(<Navbar {...defaultProps} />)
    const logoLink = screen.getByRole('link', { name: 'GoQuest' })
    expect(logoLink).toHaveAttribute('href', '#home')
  })

  it('renders desktop navigation links', () => {
    render(<Navbar {...defaultProps} />)
    const navLabels = ['Home', 'About', 'Package', 'Blog', 'Pages', 'Contact']
    for (const label of navLabels) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders top info bar with email, phone, address', () => {
    render(<Navbar {...defaultProps} />)
    expect(screen.getByText('info@goquest.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (234) 567 890')).toBeInTheDocument()
    expect(screen.getByText('123 Avenue, New York')).toBeInTheDocument()
  })

  it('renders social icons in top bar', () => {
    render(<Navbar {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('hides mobile menu initially', () => {
    render(<Navbar {...defaultProps} />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('toggles mobile menu open/closed', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Navbar {...defaultProps} onToggleMenu={onToggle} />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows close button when mobile menu is open', () => {
    render(<Navbar {...defaultProps} mobileMenuOpen={true} />)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('renders mobile menu links when open', () => {
    render(<Navbar {...defaultProps} mobileMenuOpen={true} />)
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('opens Blog dropdown on mouse enter and closes on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar {...defaultProps} />)

    const blogLink = screen.getByRole('link', { name: 'Blog' })
    const blogLi = blogLink.closest('li')!
    await user.hover(blogLi)
    expect(screen.getByRole('link', { name: 'Blog Standard' })).toBeInTheDocument()

    await user.unhover(blogLi)
    expect(screen.queryByRole('link', { name: 'Blog Standard' })).not.toBeInTheDocument()
  })

  it('opens Pages dropdown on mouse enter', async () => {
    const user = userEvent.setup()
    render(<Navbar {...defaultProps} />)

    const pagesLink = screen.getByRole('link', { name: 'Pages' })
    const pagesLi = pagesLink.closest('li')!
    await user.hover(pagesLi)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('does not show dropdown for links without children', () => {
    render(<Navbar {...defaultProps} />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    const homeLi = homeLink.closest('li')!
    expect(homeLi.querySelector('ul')).not.toBeInTheDocument()
  })

  it('calls onCloseMenu when mobile link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Navbar {...defaultProps} mobileMenuOpen={true} onCloseMenu={onClose} />)
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(onClose).toHaveBeenCalled()
  })
})
