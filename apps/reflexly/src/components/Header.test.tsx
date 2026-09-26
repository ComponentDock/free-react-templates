import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo text', () => {
    render(<Header />)
    expect(screen.getByText('Reflexly')).toBeInTheDocument()
  })

  it('renders all nav links in desktop nav', () => {
    render(<Header />)
    const desktopNav = screen.getByLabelText('Main navigation')
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
    links.forEach((link) => {
      expect(within(desktopNav).getByText(link)).toBeInTheDocument()
    })
  })

  it('renders a search button with aria-label', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders the mobile menu toggle button', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile navigation')
    const mobileLink = within(mobileNav).getByText('Home')
    fireEvent.click(mobileLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has proper logo link', () => {
    render(<Header />)
    const logo = screen.getByText('Reflexly')
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })
})
