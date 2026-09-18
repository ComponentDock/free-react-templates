import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Silverleaf')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Services', 'Testimonials', 'Blog', 'About', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders social icon links', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    // Mobile nav appears (there are 2 nav elements: desktop hidden + mobile visible)
    const navs = screen.getAllByRole('navigation')
    expect(navs.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByLabelText('Open menu'))
    // "Home" exists in both desktop and mobile — click the last one (mobile)
    const homes = screen.getAllByText('Home')
    const mobileHome = homes.at(-1)
    if (mobileHome) await user.click(mobileHome)

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  describe('desktop viewport', () => {
    beforeEach(() => {
      // Simulate desktop viewport width so md: breakpoint activates
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      })
    })

    it('renders desktop nav links visible', () => {
      render(<Navbar />)
      // Desktop nav should be visible (md:flex), mobile toggle hidden
      expect(screen.getByRole('navigation', { hidden: false })).toBeInTheDocument()
    })

    it('changes header style on scroll', async () => {
      render(<Navbar />)

      // Simulate scroll past 60px — use act() for state update
      const { act } = await import('react')
      act(() => {
        Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 100 })
        window.dispatchEvent(new Event('scroll'))
      })

      // The header should have the scrolled classes
      const header = document.querySelector('header')
      expect(header?.className).toContain('bg-white')
    })
  })
})
