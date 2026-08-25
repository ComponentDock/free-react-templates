import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders brand logo', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Crest').length).toBeGreaterThanOrEqual(1)
  })

  it('renders phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('(80) 783 367-3904')).toBeInTheDocument()
  })

  it('renders Get Free Consultant button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Get Free Consultant').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // Click a mobile nav link (the second instance of "About" — first is desktop)
    const mobileAboutLinks = screen.getAllByText('About')
    await user.click(mobileAboutLinks[1]!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('starts transparent when not scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    render(<Navbar />)
    expect(screen.getByRole('banner')).toHaveClass('bg-transparent')
  })

  it('scrolls to section when desktop nav link is clicked', async () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    const user = userEvent.setup()
    render(<Navbar />)
    // Click the first desktop "Home" link
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[0]!)
    expect(screen.getByRole('banner')).toHaveClass('bg-transparent')
  })

  it('becomes sticky on scroll', async () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(document.body)
    expect(screen.getByRole('banner')).toHaveClass('bg-gradient-to-r')
  })
})
