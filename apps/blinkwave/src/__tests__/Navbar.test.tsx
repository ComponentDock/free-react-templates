import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from '../components/Navbar'

describe('Navbar', () => {
  it('renders the brand name and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Blinkwave').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByLabelText('Primary')).toBeInTheDocument()
    const nav = screen.getByLabelText('Primary')
    expect(nav).toHaveTextContent('Home')
    expect(nav).toHaveTextContent('About')
    expect(nav).toHaveTextContent('Package')
    expect(nav).toHaveTextContent('Features')
    expect(nav).toHaveTextContent('Blog')
    expect(nav).toHaveTextContent('Contact')
  })

  it('renders the Get Started CTA button', () => {
    render(<Navbar />)
    const cta = screen.getAllByText('Get Started')
    expect(cta.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the top bar with phone and email', () => {
    render(<Navbar />)
    expect(screen.getByText(/Call Us/)).toBeInTheDocument()
    expect(screen.getByText(/info@blinkwave.com/)).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile')
    const aboutLinks = mobileNav.querySelectorAll('a')
    const aboutLink = Array.from(aboutLinks).find((a) => a.textContent === 'About')
    if (aboutLink) {
      await user.click(aboutLink)
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    }
  })

  it('closes mobile menu when Get Started is clicked in mobile nav', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile')
    const links = mobileNav.querySelectorAll('a')
    const getStartedLink = Array.from(links).find((a) => a.textContent?.trim() === 'Get Started')
    if (getStartedLink) {
      await user.click(getStartedLink)
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    }
  })

  it('renders social icons in the top bar', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
