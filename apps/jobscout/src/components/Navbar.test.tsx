import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('JobScout')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Find Jobs')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Register and Login buttons', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Register').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
