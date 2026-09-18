import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MainHeader } from './MainHeader'

describe('MainHeader', () => {
  it('renders logo', () => {
    render(<MainHeader />)
    expect(screen.getByText('Joule')).toBeInTheDocument()
  })

  it('renders search input with placeholder', () => {
    render(<MainHeader />)
    expect(screen.getByPlaceholderText('Search here')).toBeInTheDocument()
  })

  it('renders Search button', () => {
    render(<MainHeader />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders category dropdown', () => {
    render(<MainHeader />)
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
  })

  it('renders cart and wishlist buttons', () => {
    render(<MainHeader />)
    expect(screen.getByLabelText('Cart')).toBeInTheDocument()
    expect(screen.getByLabelText('Wishlist')).toBeInTheDocument()
  })

  it('displays cart badge with item count', () => {
    render(<MainHeader />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('search input accepts user typing', async () => {
    const user = userEvent.setup()
    render(<MainHeader />)
    const input = screen.getByPlaceholderText('Search here')
    await user.type(input, 'laptop')
    expect(input).toHaveValue('laptop')
  })
})
