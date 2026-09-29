import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders a semantic nav element', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('has bottom border and box shadow', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('border-b')
    expect(nav).toHaveStyle({ boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)' })
  })

  it('displays the brand text in brand-blue color', () => {
    render(<Navbar />)
    const brand = screen.getByText('Brand')
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveClass('text-brand-blue')
  })

  it('brand is wrapped in an h3 element', () => {
    render(<Navbar />)
    const h3 = screen.getByRole('heading', { level: 3 })
    expect(h3).toBeInTheDocument()
    expect(h3.textContent).toBe('Brand')
  })

  it('brand link navigates to root', () => {
    render(<Navbar />)
    const brandLink = screen.getByRole('link', { name: /brand/i })
    expect(brandLink).toHaveAttribute('href', '/')
  })

  it('renders navigation links for Home, About, and Contact', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('Home link has href /', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/')
  })

  it('About link has href /about', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about')
  })

  it('Contact link has href /contact', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
  })

  it('renders a search input with placeholder text', () => {
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()
    expect(searchInput).toHaveAttribute('type', 'search')
  })

  it('search input has pill-shaped border-radius', () => {
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toHaveClass('rounded-[30px]')
  })

  it('search input has left padding for icon space', () => {
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toHaveClass('pl-[35px]')
  })

  it('search input has correct border color', () => {
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toHaveClass('border-input-border')
  })

  it('search input has focus state classes', () => {
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toHaveClass('focus:border-input-focus')
    expect(searchInput).toHaveClass('focus:outline-none')
    expect(searchInput).toHaveClass('focus:shadow-none')
  })

  it('search input has placeholder color class', () => {
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toHaveClass('placeholder:text-placeholder-text')
  })

  it('renders a magnifying glass search icon', () => {
    const { container } = render(<Navbar />)
    const searchForm = container.querySelector('[data-testid="search-form"]')
    expect(searchForm).toBeInTheDocument()
    const svgIcon = searchForm!.querySelector('svg')
    expect(svgIcon).toBeInTheDocument()
  })

  it('search icon has correct color class', () => {
    const { container } = render(<Navbar />)
    const searchForm = container.querySelector('[data-testid="search-form"]')
    const iconSpan = searchForm!.querySelector('[aria-hidden="true"]')
    expect(iconSpan).toHaveClass('text-icon-color')
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    await user.type(searchInput, 'hello')
    expect(searchInput).toHaveValue('hello')
  })

  it('search form handles submit event', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const user = userEvent.setup()
    render(<Navbar />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    await user.type(searchInput, 'test')
    await user.keyboard('{Enter}')
    // Form should not cause errors
    consoleSpy.mockRestore()
  })

  it('container is centered with max-width', () => {
    const { container } = render(<Navbar />)
    const inner = container.querySelector('.max-w-\\[1140px\\]')
    expect(inner).toBeInTheDocument()
    expect(inner).toHaveClass('mx-auto')
  })

  it('mobile layout: brand is centered', () => {
    const { container } = render(<Navbar />)
    const inner = container.querySelector('.max-w-\\[1140px\\]')
    const firstChild = inner!.firstElementChild
    expect(firstChild).toHaveClass('items-center')
    expect(firstChild).toHaveClass('flex-col')
  })

  it('desktop layout: brand and search are in a flex row', () => {
    const { container } = render(<Navbar />)
    const inner = container.querySelector('.max-w-\\[1140px\\]')
    const firstChild = inner!.firstElementChild
    expect(firstChild).toHaveClass('md:flex-row')
  })

  it('nav links are keyboard-focusable', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toHaveAttribute('href')
    expect(homeLink.tagName).toBe('A')
  })

  it('nav links have transition classes', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toHaveClass('transition-colors')
  })

  it('brand link has hover color class', () => {
    render(<Navbar />)
    const brandLink = screen.getByRole('link', { name: /brand/i })
    expect(brandLink).toHaveClass('hover:text-brand-hover')
  })
})
