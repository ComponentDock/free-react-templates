import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Vow')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Clothes')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText('Lingerie')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<Header />)
    expect(screen.getByLabelText('Search products')).toBeInTheDocument()
  })

  it('renders cart, wishlist, and user buttons', () => {
    render(<Header />)
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.getByLabelText('Wishlist')).toBeInTheDocument()
    expect(screen.getByLabelText('User account')).toBeInTheDocument()
  })

  it('has a search form with submit', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const input = screen.getByLabelText('Search products')
    await user.type(input, 'dress')
    expect(input).toHaveValue('dress')
  })
})
