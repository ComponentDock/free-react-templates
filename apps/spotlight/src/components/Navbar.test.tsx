import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Spotlight')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Listings')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows the hamburger menu button on mobile', () => {
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('has correct nav links with href attributes', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#')
    expect(screen.getByText('Listings')).toHaveAttribute('href', '#listings')
    expect(screen.getByText('About')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Blog')).toHaveAttribute('href', '#blog')
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact')
  })
})
