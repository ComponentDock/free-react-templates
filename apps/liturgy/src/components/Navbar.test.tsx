import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Liturgy')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Who We Are' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Events' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Ministries dropdown button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /ministries/i })).toBeInTheDocument()
  })

  it('shows dropdown items on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /ministries/i })
    await user.hover(btn)
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Students' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Care Ministry' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Missions' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request Prayer' })).toBeInTheDocument()
  })

  it('renders mobile toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    // Mobile menu is not rendered initially (conditional render, not hidden)
    expect(screen.queryByText('Home', { selector: '.md\\:hidden a' })).not.toBeInTheDocument()
    await user.click(toggle)
    // After toggle, mobile links should appear
    const mobileLinks = screen.getAllByRole('link')
    expect(mobileLinks.length).toBeGreaterThan(4)
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /ministries/i })
    await user.hover(btn)
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument()
    await user.unhover(btn)
    expect(screen.queryByRole('link', { name: 'Children' })).not.toBeInTheDocument()
  })

  it('has proper aria-expanded on dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /ministries/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.hover(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
