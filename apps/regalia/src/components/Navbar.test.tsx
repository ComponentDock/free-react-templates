import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('displays the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Regalia')).toBeInTheDocument()
  })

  it('displays navigation links', () => {
    render(<Navbar />)
    const items = ['Home', 'Rooms', 'Dining', 'Amenities', 'Blog', 'About', 'Contact']
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it('has correct anchor links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('Rooms')).toHaveAttribute('href', '#rooms')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    // The mobile menu should now contain a second set of links
    const links = screen.getAllByText('Rooms')
    expect(links.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(btn)
    // Click the mobile menu link (last occurrence)
    const mobileLinks = screen.getAllByText('Rooms')
    const lastLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(lastLink)
    // After close, aria-expanded should be false
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows aria-expanded on toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
