import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Cellarly wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('Cellarly')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows cart icon with badge count', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('opens Products dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Products'))
    expect(screen.getByText('All Products')).toBeInTheDocument()
    expect(screen.getByText('Single Product')).toBeInTheDocument()
    expect(screen.getByText('Cart')).toBeInTheDocument()
    expect(screen.getByText('Checkout')).toBeInTheDocument()
  })

  it('closes Products dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Products'))
    expect(screen.getByText('All Products')).toBeInTheDocument()
    await user.unhover(screen.getByText('Products'))
    expect(screen.queryByText('All Products')).not.toBeInTheDocument()
  })

  it('toggles cart dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Shopping cart'))
    expect(screen.getByText('Bacardi 151')).toBeInTheDocument()
    expect(screen.getByText(/View All/)).toBeInTheDocument()
  })

  it('opens mobile menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const homes = screen.getAllByText('Home')
    expect(homes.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
