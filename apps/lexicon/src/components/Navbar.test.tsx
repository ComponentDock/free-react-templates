import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders top info bar with phone and email', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 555 234 5678')).toBeInTheDocument()
    expect(screen.getByText('info@lexicon.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders nav links and Book Now button', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getAllByText('Book Now').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // Click the first mobile nav link (Home)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    // Menu should close — the close button should no longer exist
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // Click the mobile Book Now link (second one)
    const bookNowLinks = screen.getAllByText('Book Now')
    const mobileBookNow = bookNowLinks[bookNowLinks.length - 1]!
    await user.click(mobileBookNow)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('adds scrolled class on scroll', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toHaveClass('bg-transparent')
    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(screen.getByRole('navigation')).toHaveClass('bg-ink')
  })

  it('cleans up scroll listener', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })
})
