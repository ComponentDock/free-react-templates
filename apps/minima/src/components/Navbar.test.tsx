import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from '../components/Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('minima')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getByRole('menuitem', { name: label })).toBeInTheDocument()
    })
  })

  it('has correct anchor hrefs', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('menuitem', { name: 'Home' })
    expect(homeLink).toHaveAttribute('href', '#home')
  })

  it('renders mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })
})
