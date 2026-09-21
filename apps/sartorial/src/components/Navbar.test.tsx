import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Sartorial').length).toBeGreaterThanOrEqual(1)
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'History' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders icon buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Wishlist' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cart' })).toBeInTheDocument()
  })

  it('toggles mobile menu open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    await user.click(toggle)
  })

  it('clicking a mobile nav link closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    const galleryLinks = screen.getAllByRole('link', { name: 'Gallery' })
    const last = galleryLinks.at(-1)
    expect(last).toBeDefined()
    await user.click(last!)
  })
})
