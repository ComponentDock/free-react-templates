import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('BrightPath')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Pages', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders login link', () => {
    render(<Navbar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('renders phone and email in top bar', () => {
    render(<Navbar />)
    expect(screen.getByText('+953 0123 654 896')).toBeInTheDocument()
    expect(screen.getByText('info@brightpath.edu')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    // Before click: the mobile dropdown (second ul) should not be present in DOM
    await user.click(toggle)
    // After click: the mobile dropdown should be visible
    const mobileLinks = screen.getAllByText('About')
    // The second one is in the mobile dropdown
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    const aboutLinks = screen.getAllByText('About')
    // Click the mobile menu link (last one)
    await user.click(aboutLinks[aboutLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('has search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})
