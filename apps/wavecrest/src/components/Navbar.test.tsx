import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Wavecrest')).toBeInTheDocument()
    // Desktop nav has the links
    const nav = screen.getAllByText('Home')
    expect(nav.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Mobile nav links have block class — use the last "Home" link (mobile)
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[homeLinks.length - 1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has aria-expanded attribute on toggle', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
