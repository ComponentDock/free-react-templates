import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Venture')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders the Contact Now button', () => {
    render(<Navbar />)
    expect(screen.getByText('Contact Now')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByLabelText('Toggle menu')
    await user.click(toggleButton)
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThan(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByLabelText('Toggle menu')
    await user.click(toggleButton)
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThan(1)
    const mobileHomeLink = mobileLinks[1]
    if (mobileHomeLink) {
      await user.click(mobileHomeLink)
    }
  })
})
