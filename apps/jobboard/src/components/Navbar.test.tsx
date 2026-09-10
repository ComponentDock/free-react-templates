import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('JobBoard')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Blog', 'Pages', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders Post a Job button', () => {
    render(<Navbar />)
    expect(screen.getByText('Post a Job')).toBeInTheDocument()
  })

  it('renders Log In link', () => {
    render(<Navbar />)
    expect(screen.getByText('Log In')).toBeInTheDocument()
  })

  it('adds background on scroll and cleans up listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-white')

    unmount()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    expect(hamburger).toBeInTheDocument()

    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const mobileHome = screen.getAllByText('Home')
    expect(mobileHome.length).toBeGreaterThanOrEqual(2)

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click the mobile "About" link (second instance — first is desktop, second is mobile)
    const aboutLinks = screen.getAllByText('About')
    const lastAbout = aboutLinks[aboutLinks.length - 1]
    expect(lastAbout).toBeDefined()
    await user.click(lastAbout!)

    // Menu should close
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('sets aria-expanded on mobile menu toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
