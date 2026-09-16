import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Trowel/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Project', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('renders cart and search buttons on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Shopping cart' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(document.getElementById('mobile-menu')).toBeTruthy()

    const closeBtn = screen.getByRole('button', { name: 'Close menu' })
    fireEvent.click(closeBtn)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    // In the mobile menu, find all "About" links — the second one is the mobile link
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks.length).toBe(2)
    const mobileAbout = aboutLinks[1] as HTMLElement
    fireEvent.click(mobileAbout)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
