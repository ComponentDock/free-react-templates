import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders a semantic nav element', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('displays the brand text in blue', () => {
    render(<Navbar />)
    const brand = screen.getByText('Brand')
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveClass('text-brand-blue')
  })

  it('renders navigation links for Home, About, and Contact', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders a search input with placeholder text', () => {
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()
    expect(searchInput).toHaveAttribute('type', 'search')
  })

  it('renders a magnifying glass icon near the search input', () => {
    const { container } = render(<Navbar />)
    const searchSection = container.querySelector('[data-testid="search-wrapper"]')
    expect(searchSection).toBeInTheDocument()
    const svgIcon = searchSection!.querySelector('svg')
    expect(svgIcon).toBeInTheDocument()
  })

  it('has a white background with a bottom border', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('bg-white')
    expect(nav).toHaveClass('border-b')
  })

  it('centers content with a max-width constraint', () => {
    const { container } = render(<Navbar />)
    const inner = container.querySelector('[data-testid="navbar-inner"]')
    expect(inner).toHaveClass('mx-auto')
    expect(inner).toHaveClass('max-w-7xl')
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    await user.type(searchInput, 'hello')
    expect(searchInput).toHaveValue('hello')
  })

  it('nav links are keyboard-focusable', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toHaveAttribute('href')
  })
})
