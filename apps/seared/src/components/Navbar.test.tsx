import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('S')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Reserve A Table')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a nav link (the second "Home" is the mobile menu one)
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks[mobileLinks.length - 1]!)

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has correct anchor links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link')
    const hrefs = links.map((l) => l.getAttribute('href'))
    expect(hrefs).toContain('#home')
    expect(hrefs).toContain('#features')
    expect(hrefs).toContain('#menu')
    expect(hrefs).toContain('#footer')
  })
})
