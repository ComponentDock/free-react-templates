import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Doflo logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Doflo')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact']
    for (const label of links) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('toggles the mobile menu', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a mobile link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    // When menu is open, there are two "About" links (desktop hidden + mobile visible)
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBe(2)
    // Click the mobile menu link (second instance)
    fireEvent.click(aboutLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
