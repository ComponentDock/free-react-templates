import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders brand name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Innovex')).toBeInTheDocument()
    const nav = screen.getByRole('banner')
    expect(nav).toBeInTheDocument()
    const links = ['Home', 'About', 'Pricing', 'Portfolio', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByLabelText('Open menu')
    await user.click(toggleButton)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('adds shadow on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByRole('banner')
    // Simulate scroll past 50px
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav).toHaveClass('shadow-lg')
  })
})
