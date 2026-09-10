import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the Timber brand link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Timber/i })).toHaveAttribute('href', '#home')
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Projects', 'About', 'Services', 'Blog', 'Contact']
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('has a toggle button for mobile', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle navigation/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    const mobileLinks = screen.getAllByRole('link', { name: /Home/i })
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
