import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders brand name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Sovereign')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('Amenities')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('adds solid background on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByLabelText('Main navigation')
    expect(nav.className).toContain('bg-transparent')

    // Simulate scroll past threshold
    act(() => {
      vi.spyOn(window, 'scrollY', 'get').mockReturnValue(100)
      window.dispatchEvent(new Event('scroll'))
    })

    expect(nav.className).toContain('bg-dark/95')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByLabelText('Open menu')
    await user.click(toggleButton)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    // Close the menu
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByLabelText('Open menu'))
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[aboutLinks.length - 1]!)

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByLabelText('Open menu'))
    const bookButtons = screen.getAllByText('Book Now')
    await user.click(bookButtons[bookButtons.length - 1]!)

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('cleans up scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
