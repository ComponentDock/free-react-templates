import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('WARES')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search products')).toBeInTheDocument()
  })

  it('renders account and cart buttons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('My account')).toBeInTheDocument()
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
  })

  it('shows cart badge with count', () => {
    render(<Navbar />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('allows typing in search', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const input = screen.getByLabelText('Search products')
    await user.type(input, 'shoes')
    expect(input).toHaveValue('shoes')
  })
})
