import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'JobNest' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    for (const label of ['Home', 'Browse Job', 'Pages', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Post a Job' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toBeInTheDocument()

    await user.click(menuButton)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('adds shadow on scroll and cleans up the listener', () => {
    const { unmount } = render(<Navbar />)

    const header = screen.getByRole('link', { name: 'JobNest' }).closest('header')!
    expect(header.className).not.toContain('shadow-md')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 10, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('shadow-md')

    unmount()

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
  })
})
