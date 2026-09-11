import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo with Coin and Cast text', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    const logo = within(header).getByText('Coin')
    expect(logo.closest('a')).toHaveAttribute('href', '#home')
  })

  it('renders desktop nav links', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Service' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Pages' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Get a Quote button on desktop', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /Get a Quote/i })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('attaches and cleans up resize listener', async () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    addSpy.mockRestore()
    removeSpy.mockRestore()
  })

  it('renders contact info in the top bar', () => {
    render(<Header />)
    expect(screen.getByText('(123) 456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@coincast.com')).toBeInTheDocument()
  })
})
