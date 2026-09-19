import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByLabelText('Main navigation')
    expect(within(nav).getByText('Home')).toBeInTheDocument()
    expect(within(nav).getByText('Shop')).toBeInTheDocument()
    expect(within(nav).getByText('Categories')).toBeInTheDocument()
    expect(within(nav).getByText('Blog')).toBeInTheDocument()
    expect(within(nav).getByText('About')).toBeInTheDocument()
    expect(within(nav).getByText('Contact')).toBeInTheDocument()
  })

  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Shopbox')).toBeInTheDocument()
  })

  it('renders search icon', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('renders account icon', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Account')).toBeInTheDocument()
  })

  it('renders cart icon with badge', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Cart with 3 items')).toBeInTheDocument()
  })

  it('is sticky', () => {
    render(<Navbar />)
    const header = screen.getByLabelText('Main navigation').closest('header')!
    expect(header.className).toContain('sticky')
  })

  it('shows hamburger on mobile', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Toggle navigation')).toBeInTheDocument()
  })

  it('toggles mobile navigation on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
    await user.click(toggle)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
  })

  it('closes mobile navigation on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('has search button with correct aria', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Search'))
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('has account button with correct aria', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Account'))
    expect(screen.getByLabelText('Account')).toBeInTheDocument()
  })

  it('has cart button with correct aria', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Cart with 3 items'))
    expect(screen.getByLabelText('Cart with 3 items')).toBeInTheDocument()
  })
})
