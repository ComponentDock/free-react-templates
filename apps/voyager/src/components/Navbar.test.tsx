import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Voyager')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Tours')).toBeInTheDocument()
    expect(screen.getAllByText('Hotels').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows Tours dropdown items on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toursLink = screen.getByText('Tours')
    await user.hover(toursLink)
    expect(screen.getByText('Destination')).toBeInTheDocument()
    expect(screen.getByText('Cruises')).toBeInTheDocument()
  })

  it('toggles mobile menu and clicking a link closes it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // Mobile menu is shown — click the Home link to close
    const mobileHome = screen.getAllByText('Home')
    // The last one is the mobile link
    await user.click(mobileHome[mobileHome.length - 1]!)
    // After clicking, mobile menu should be closed
    // Toggle button should show hamburger again
    expect(toggle).toHaveTextContent('☰')
  })
})
