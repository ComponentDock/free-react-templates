import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText(/Loan/)).toBeInTheDocument()
    expect(screen.getByText(/forge/)).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('shows phone CTA on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText(/\+880\.762\.009\.00/)).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('adds scrolled class on scroll', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    const header = document.querySelector('header')
    expect(header?.className).toContain('bg-white')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()

    const aboutLinks = screen.getAllByRole('link', { name: /about/i })
    await user.click(aboutLinks[1]!)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when phone CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    // Find the phone link in the mobile nav (not the desktop one)
    const phoneLinks = screen.getAllByText(/\+880\.762\.009\.00/)
    // The mobile one is the second occurrence
    const mobilePhoneLink = phoneLinks[1]!.closest('a')!
    mobilePhoneLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(mobilePhoneLink)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('shows scrolled toggle icon when scrolled and menu open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Scroll first
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    // Now open the mobile menu while scrolled
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // This triggers the X icon with 'text-navy' class (scrolled branch)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
