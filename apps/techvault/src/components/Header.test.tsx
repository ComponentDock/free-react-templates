import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Tech')).toBeInTheDocument()
    expect(screen.getByText('Vault')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<Header />)
    expect(screen.getByPlaceholderText('Search for products...')).toBeInTheDocument()
  })

  it('renders the category dropdown', () => {
    render(<Header />)
    expect(screen.getByDisplayValue('All Categories')).toBeInTheDocument()
  })

  it('renders wishlist and cart', () => {
    render(<Header />)
    expect(screen.getByText('Wishlist')).toBeInTheDocument()
    expect(screen.getByText('Cart')).toBeInTheDocument()
    expect(screen.getByText('115')).toBeInTheDocument()
    expect(screen.getByText('$85')).toBeInTheDocument()
  })

  it('prevents search form submission', () => {
    render(<Header />)
    const form = screen.getByPlaceholderText('Search for products...').closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
