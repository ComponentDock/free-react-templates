import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Cayo')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /amenities/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /rooms/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /restaurant/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders Book Now CTA', () => {
    render(<Navbar />)
    const bookNowLinks = screen.getAllByText('Book Now')
    expect(bookNowLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders top info bar with address and phone', () => {
    render(<Navbar />)
    expect(screen.getByText('96 Ernser Vista Suite 437, NY, US')).toBeInTheDocument()
    expect(screen.getByText('(123) 456-78-910')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)
    const homeLinks = screen.getAllByText('Home')
    const lastHomeLink = homeLinks[homeLinks.length - 1]
    await user.click(lastHomeLink!)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)
    const bookNowLinks = screen.getAllByText('Book Now')
    await user.click(bookNowLinks[bookNowLinks.length - 1]!)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
