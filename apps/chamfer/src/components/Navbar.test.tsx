import { act } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Chamfer/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Contact Us CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    const mobileLinks = screen.getByLabelText('Mobile navigation').querySelectorAll('a')
    await user.click(mobileLinks[0]!)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('applies scrolled background on scroll', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 60, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-dark-navy/95')
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-transparent')
  })
})
