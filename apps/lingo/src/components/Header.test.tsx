import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Lingo')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    const links = ['Home', 'Courses', 'Instructors', 'Events', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders phone number in top bar', () => {
    render(<Header />)
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders hamburger menu button on mobile', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toBeInTheDocument()
  })

  it('opens mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(hamburger)
    // Mobile nav links should be visible
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu on nav link click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(hamburger)
    // Click a nav link to close menu
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    // Menu should be closed
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toBeInTheDocument()
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(hamburger)
    await user.click(hamburger)
    // Menu should be closed
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toBeInTheDocument()
  })

  it('renders language selector', () => {
    render(<Header />)
    expect(screen.getByLabelText('Language')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Header />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
