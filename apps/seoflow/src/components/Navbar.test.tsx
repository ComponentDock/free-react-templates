import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: 'SeoFlow' })
    expect(logo).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Services', 'Case Study', 'About', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    })
  })

  it('renders the phone CTA on desktop', () => {
    render(<Navbar />)
    expect(screen.getAllByText('+10 673 567 367').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const serviceLinks = screen.getAllByText('Services')
    const mobileLink = serviceLinks.at(-1)
    if (mobileLink) {
      await user.click(mobileLink)
    }
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
