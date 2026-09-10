import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Bankcraft/ })).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    for (const link of ['Home', 'About Us', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders newsletter signup', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()} Bankcraft`)),
    ).toBeInTheDocument()
  })

  it('allows subscribing to the newsletter', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
  })
})
