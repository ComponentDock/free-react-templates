import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and nav links', () => {
    render(<Navbar />)
    // Brand is split: "Job" + <span>"Vane"</span> — match via textContent
    const brand = screen.getByText(/Vane/)
    expect(brand.closest('a')).toHaveTextContent(/Job.*Vane/)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Candidates')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Post a Job')).toBeInTheDocument()
    expect(screen.getByText('Want a Job')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Click a mobile nav link — should close the menu
    const homeLinks = screen.getAllByText('Home')
    // The mobile link is the last "Home"
    const lastHome = homeLinks[homeLinks.length - 1]
    expect(lastHome).toBeDefined()
    await user.click(lastHome!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches from transparent to solid on scroll and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    fireEvent.scroll(window)
    expect(nav.className).toContain('bg-white')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(nav.className).toContain('bg-transparent')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
