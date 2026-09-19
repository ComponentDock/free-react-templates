import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Catalogly')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders search and cart buttons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('Cart')).toBeInTheDocument()
  })

  it('shows cart badge with zero', () => {
    render(<Navbar />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(screen.getAllByText('Pages').length).toBeGreaterThanOrEqual(2)
    await user.click(toggle)
  })

  it('shows shop dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Shop'))
    expect(screen.getByText('Shop Category')).toBeInTheDocument()
    expect(screen.getByText('Product Details')).toBeInTheDocument()
  })

  it('hides shop dropdown on unhover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Shop'))
    expect(screen.getByText('Shop Category')).toBeInTheDocument()
    await user.unhover(screen.getByText('Shop'))
    expect(screen.queryByText('Shop Category')).not.toBeInTheDocument()
  })

  it('shows blog dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Blog'))
    expect(screen.getByText('Blog Details')).toBeInTheDocument()
  })
})
