import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Sun')).toBeInTheDocument()
    expect(screen.getByText('dial')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders top bar with email', () => {
    render(<Navbar />)
    expect(screen.getByText('contact@sundale.com')).toBeInTheDocument()
  })

  it('renders top bar with phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 555 123 4567')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument()
  })

  it('closes mobile menu when link clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const mobileLink = screen.getByTestId('mobile-nav').querySelector('a')
    expect(mobileLink).not.toBeNull()
    // Prevent jsdom hash-navigation from racing with React handler
    mobileLink!.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(mobileLink!)
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument()
  })
})
