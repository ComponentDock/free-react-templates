import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders top bar contact info', () => {
    render(<Navbar />)
    expect(screen.getByText(/450 Strand, Charing Cross/)).toBeInTheDocument()
    expect(screen.getByText(/08:00 - 19:00/)).toBeInTheDocument()
    expect(screen.getByText(/\(\+800\) 1234 56781/)).toBeInTheDocument()
  })

  it('renders social icons in top bar', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: /Home/ }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/ })).toBeInTheDocument()
  })

  it('renders logo and appointment CTA', () => {
    render(<Navbar />)
    expect(screen.getByText(/BugGuard/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Appointment/ })).toBeInTheDocument()
  })

  it('toggles dark mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Toggle dark mode/ })
    expect(toggle).toHaveTextContent('☾')
    await user.click(toggle)
    expect(toggle).toHaveTextContent('☀')
    await user.click(toggle)
    expect(toggle).toHaveTextContent('☾')
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /Open menu/ })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /Close menu/ })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/ }))
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/ }))
    const mobileNav = screen.getByLabelText('Mobile')
    const link = mobileNav.querySelector('a')!
    await user.click(link)
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })
})
