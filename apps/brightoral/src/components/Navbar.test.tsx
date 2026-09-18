import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText(/Bright/)).toBeInTheDocument()
    expect(screen.getByText(/oral/)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Appointment', 'Testimonial', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile navigation')
    const aboutLink = mobileNav.querySelectorAll('a')[1]
    if (aboutLink) await user.click(aboutLink)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})
