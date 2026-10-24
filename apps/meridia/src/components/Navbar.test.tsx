import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and tagline', () => {
    render(<Navbar />)
    expect(screen.getByText('Unioncorp.')).toBeInTheDocument()
    expect(screen.getByText('Finance & Consultation')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Work', 'Pricing', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders Get Started CTA button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Get Started').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    // After toggle, both desktop and mobile "Home" links exist — mobile is the last one
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const mobileLink = screen.getAllByText('Home').at(1)
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when mobile Get Started is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    // The mobile Get Started is the second one (last)
    const ctaButtons = screen.getAllByText('Get Started')
    const mobileCta = ctaButtons.at(1)
    expect(mobileCta).toBeDefined()
    await user.click(mobileCta!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
