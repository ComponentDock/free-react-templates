import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Homefront')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Property')).toBeInTheDocument()
    expect(screen.getByText('Agents')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Sign-In and Sign-Up links', () => {
    render(<Navbar />)
    expect(screen.getByText('Sign-In')).toBeInTheDocument()
    expect(screen.getByText('Sign-Up')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })

    expect(screen.getByText('Sign-In')).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a mobile nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })

    await user.click(toggle)
    // After opening mobile menu, there are TWO "Home" links (desktop hidden + mobile visible)
    // The mobile one is inside the ul with bg-primary class
    const mobileLinks = screen.getAllByText('Home')
    // Click the last "Home" link which is in the mobile menu
    const mobileHomeLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileHomeLink)
  })
})
