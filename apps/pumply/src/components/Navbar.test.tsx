import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the wordmark, desktop links, and outlined CONTACT button', () => {
    render(<Navbar />)
    const wordmark = screen.getByRole('link', { name: 'Pumply' })
    expect(wordmark).toHaveAttribute('href', '#home-section')
    expect(wordmark).toHaveClass('text-white')
    for (const link of ['Home', 'Classes', 'Schedule', 'Trainer', 'Services']) {
      expect(screen.getByRole('link', { name: link, hidden: true })).toBeInTheDocument()
    }
    const contact = screen.getByRole('link', { name: 'Contact', hidden: true })
    expect(contact).toHaveAttribute('href', '#contact-section')
    expect(contact).toHaveClass('border-primary', 'text-primary')
    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('turns white with black links when the page is scrolled and back when at the top', () => {
    const setScrollY = (y: number) =>
      Object.defineProperty(window, 'scrollY', { value: y, writable: true, configurable: true })
    render(<Navbar />)
    expect(screen.getByRole('banner')).toHaveClass('bg-transparent')
    setScrollY(120)
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: 'Pumply' })).toHaveClass('text-black')
    expect(screen.getByRole('link', { name: 'Home', hidden: true })).toHaveClass('text-black')
    setScrollY(0)
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).toHaveClass('bg-transparent')
    expect(screen.getByRole('link', { name: 'Pumply' })).toHaveClass('text-white')
  })

  it('opens and closes the mobile menu, closing on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileMenu = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileMenu).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileMenu).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home', hidden: true })).toHaveLength(2)
    await user.click(within(mobileMenu).getByRole('link', { name: 'Trainer' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the CONTACT link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    const mobileMenu = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileMenu).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
