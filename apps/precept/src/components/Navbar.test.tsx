import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Precept')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders phone and email in top bar', () => {
    render(<Navbar />)
    expect(screen.getByText('+953 012 3654 896')).toBeInTheDocument()
    expect(screen.getByText('info@precept.edu')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[1]!
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
