import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('S')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[1]!)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('adds scrolled class on scroll', () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    const nav = screen.getByLabelText('Main navigation')
    expect(nav.className).toContain('backdrop-blur-sm')
  })

  it('has accessible navigation label', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })

  it('cleans up scroll listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeEventListenerSpy.mockRestore()
  })
})
