import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Mercato wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('Mercato')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows shopping bag icon', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Shopping bag')).toBeInTheDocument()
  })

  it('shows search toggle button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('opens search bar on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Search'))
    expect(screen.getByPlaceholderText('Search Here')).toBeInTheDocument()
  })

  it('closes search bar on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Search'))
    expect(screen.getByPlaceholderText('Search Here')).toBeInTheDocument()
    const searchButtons = screen.getAllByLabelText('Search')
    const closeBtn = searchButtons.find((el) => el.tagName === 'BUTTON')
    expect(closeBtn).toBeDefined()
    await user.click(closeBtn!)
    expect(screen.queryByPlaceholderText('Search Here')).not.toBeInTheDocument()
  })

  it('shows Shop dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Shop'))
    expect(screen.getByText('Shop Category')).toBeInTheDocument()
    expect(screen.getByText('Product Details')).toBeInTheDocument()
    expect(screen.getByText('Product Checkout')).toBeInTheDocument()
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument()
    expect(screen.getByText('Confirmation')).toBeInTheDocument()
  })

  it('hides Shop dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Shop'))
    expect(screen.getByText('Shop Category')).toBeInTheDocument()
    await user.unhover(screen.getByText('Shop'))
    expect(screen.queryByText('Shop Category')).not.toBeInTheDocument()
  })

  it('shows Blog dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Blog'))
    expect(screen.getByText('Blog Details')).toBeInTheDocument()
  })

  it('shows Pages dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.hover(screen.getByText('Pages'))
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Tracking')).toBeInTheDocument()
    expect(screen.getByText('Elements')).toBeInTheDocument()
  })

  it('renders search submit button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Search'))
    expect(screen.getByLabelText('Submit search')).toBeInTheDocument()
  })
})
