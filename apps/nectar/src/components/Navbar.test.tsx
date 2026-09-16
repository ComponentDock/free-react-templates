import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo with link to home', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: /nectar home/i })
    expect(logo).toHaveAttribute('href', '#home')
  })

  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Nectar')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    const labels = ['Home', 'About', 'Project', 'Blog', 'Contact']
    labels.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders desktop nav links with correct hrefs', () => {
    render(<Navbar />)
    const homeLink = screen.getAllByRole('link', { name: 'Home' })[0]
    expect(homeLink).toHaveAttribute('href', '#home')
    const aboutLink = screen.getAllByRole('link', { name: 'About' })[0]
    expect(aboutLink).toHaveAttribute('href', '#about')
  })

  it('renders search button with correct aria-label', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders hamburger toggle with aria-expanded false initially', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu open on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu closed on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const closeToggle = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeToggle)
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('renders navigation landmark with aria-label', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a mobile nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    // Mobile menu links are the second set of links (the ones in the mobile ul)
    const mobileHomeLinks = screen.getAllByRole('link', { name: 'Home' })
    // The mobile link is the last one
    const mobileHomeLink = mobileHomeLinks[mobileHomeLinks.length - 1]!
    await user.click(mobileHomeLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('renders logo SVG with aria-hidden', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: /nectar home/i })
    const svg = logo.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders search icon with aria-hidden', () => {
    render(<Navbar />)
    const searchButton = screen.getByRole('button', { name: /search/i })
    const svg = searchButton.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
