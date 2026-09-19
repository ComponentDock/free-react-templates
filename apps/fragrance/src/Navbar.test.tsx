import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './components/Navbar'

describe('Navbar', () => {
  it('renders the Fragrance logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Fragrance')).toBeInTheDocument()
  })

  it('renders all nav links on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders cart badge with count 3', () => {
    render(<Navbar />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders Buy Now button', () => {
    render(<Navbar />)
    expect(screen.getByText('Buy Now')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows Shop dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const shopLink = screen.getByText('Shop')
    await user.hover(shopLink)
    expect(screen.getByText('Shop Category')).toBeInTheDocument()
    expect(screen.getByText('Product Details')).toBeInTheDocument()
  })

  it('hides Shop dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const shopLink = screen.getByText('Shop')
    await user.hover(shopLink)
    expect(screen.getByText('Shop Category')).toBeInTheDocument()
    await user.unhover(shopLink)
    expect(screen.queryByText('Shop Category')).not.toBeInTheDocument()
  })
})
