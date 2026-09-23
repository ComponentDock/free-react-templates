import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Beacon logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Beacon')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('toggles search input when search button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const searchBtn = screen.getByRole('button', { name: /toggle search/i })
    expect(screen.queryByLabelText('Search')).not.toBeInTheDocument()

    await user.click(searchBtn)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()

    await user.click(searchBtn)
    expect(screen.queryByLabelText('Search')).not.toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: /toggle menu/i })
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuBtn)
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true')

    await user.click(menuBtn)
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('navigation links point to correct anchors', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('About')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Services')).toHaveAttribute('href', '#services')
    expect(screen.getByText('Portfolio')).toHaveAttribute('href', '#portfolio')
    expect(screen.getByText('Blog')).toHaveAttribute('href', '#blog')
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact')
  })
})
