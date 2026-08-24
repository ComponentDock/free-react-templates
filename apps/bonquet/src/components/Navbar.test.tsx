import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Bonquet')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('+10 (78) 783 3674')).toBeInTheDocument()
  })

  it('renders the Book a Table button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Book a Table' })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })

    // Mobile menu is hidden initially on desktop
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
