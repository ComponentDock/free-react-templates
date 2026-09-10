import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText(/Fixcraft/)).toBeDefined()
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Services')).toBeDefined()
    expect(screen.getByText('Pricing')).toBeDefined()
    expect(screen.getByText('Blog')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('shows top bar with phone and hours', () => {
    render(<Navbar />)
    expect(screen.getByText('+01 (123) 456 7890')).toBeDefined()
    expect(screen.getByText('Mon – Sat: 8am – 9pm')).toBeDefined()
  })

  it('opens mobile menu when hamburger clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeDefined()
    expect(screen.getByLabelText('Mobile menu')).toBeDefined()
  })

  it('closes mobile menu when close button clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByLabelText('Mobile menu')).toBeNull()
  })

  it('renders appointment CTA link', () => {
    render(<Navbar />)
    const ctas = screen.getAllByText('Appointment')
    expect(ctas.length).toBeGreaterThanOrEqual(1)
  })
})
