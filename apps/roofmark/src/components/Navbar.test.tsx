import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders top bar with phone, address, and email', () => {
    render(<Navbar />)
    expect(screen.getByText('(123) 456 789')).toBeInTheDocument()
    expect(screen.getByText('123 Some Address, Country')).toBeInTheDocument()
    expect(screen.getByText('info@roofmark.com')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    const { container } = render(<Navbar />)
    const topBar = container.querySelector('.bg-brand-purple')
    const svgs = topBar!.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(5)
  })

  it('renders login and register links', () => {
    render(<Navbar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('roof')).toBeInTheDocument()
    expect(screen.getByText('mark')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Listings')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders submit listing button', () => {
    render(<Navbar />)
    expect(screen.getByText('Submit Listing')).toBeInTheDocument()
  })

  it('handles Login link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const loginLink = screen.getByText('Login')
    loginLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(loginLink)
  })

  it('handles Register link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const registerLink = screen.getByText('Register')
    registerLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(registerLink)
  })

  it('handles Submit Listing link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const submitLink = screen.getByText('Submit Listing')
    submitLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(submitLink)
  })

  it('handles nav link clicks', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const homeLink = screen.getByText('Home')
    homeLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(homeLink)
  })
})
