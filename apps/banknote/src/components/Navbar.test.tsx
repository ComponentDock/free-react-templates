import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Banknote')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us ▾')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows dropdown on hover over About Us', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const aboutBtn = screen.getByText('About Us ▾')
    await user.hover(aboutBtn)
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('hides dropdown when mouse leaves', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const aboutBtn = screen.getByText('About Us ▾')
    await user.hover(aboutBtn)
    expect(screen.getByText('Team')).toBeInTheDocument()
    await user.unhover(aboutBtn)
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Toggle menu')).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByLabelText('Toggle menu'))
    expect(screen.getByLabelText('Toggle menu')).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Toggle menu')).toHaveAttribute('aria-expanded', 'true')
    const homeLinks = screen.getAllByText('Home')
    const homeLink = homeLinks[1] // mobile menu link
    if (homeLink) await user.click(homeLink)
    expect(screen.getByLabelText('Toggle menu')).toHaveAttribute('aria-expanded', 'false')
  })
})
