import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Landcraft')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Team' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    const aboutLink = mobileNav.querySelector('a[href="#about"]')!
    await user.click(aboutLink)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('renders contact info in the middle bar', () => {
    render(<Navbar />)
    expect(screen.getByText('MON - SAT (9AM - 5PM)')).toBeInTheDocument()
    expect(screen.getByText('info@landcraft.com')).toBeInTheDocument()
    expect(screen.getByText('(+1) 1144-1254')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})
