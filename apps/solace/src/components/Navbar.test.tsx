import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Solace')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Rooms', 'Resto & Bar', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders Book Now button', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: 'Book Now' }).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const aboutLinks = screen.getAllByText('About')
    const mobileAboutLink = aboutLinks[aboutLinks.length - 1]!
    await user.click(mobileAboutLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const bookNowLinks = screen.getAllByText('Book Now')
    const mobileBookNow = bookNowLinks[bookNowLinks.length - 1]!
    await user.click(mobileBookNow)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('has proper aria-label on nav', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('sets aria-expanded on toggle button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
