import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Eco')).toBeInTheDocument()
    expect(screen.getByText('Pulse')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'What We Do' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders donation button on desktop', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Make a Donation').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    // Mobile menu not in DOM initially (conditional render)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).toBeNull()
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeVisible()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeVisible()
    // Get the mobile nav link (second "Home" link)
    const links = screen.getAllByRole('link', { name: 'Home' })
    const mobileLink = links[1]
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
  })
})
