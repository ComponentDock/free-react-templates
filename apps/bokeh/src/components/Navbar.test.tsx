import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Bokeh')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Services')).toBeDefined()
    expect(screen.getByText('Portfolio')).toBeDefined()
    expect(screen.getByText('Pricing')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('has mobile menu toggle', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Toggle navigation')).toBeDefined()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    await user.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[aboutLinks.length - 1]!)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })
})
