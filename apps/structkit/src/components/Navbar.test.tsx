import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

afterEach(() => {
  fireEvent.scroll(window)
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
})

describe('Navbar', () => {
  it('renders the wordmark, menu links, CTA and social icons over the hero', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Structkit.' })).toHaveClass('text-white')
    expect(screen.getByRole('link', { name: /Download/ })).toHaveAttribute('href', '#cards')
    expect(screen.getByRole('link', { name: /Premium/ })).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('opens the Components dropdown with both component links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Components/ })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: /All Components/ })).toHaveAttribute('href', '#buttons')
    expect(screen.getByRole('link', { name: /Documentation/ })).toHaveAttribute(
      'href',
      '#typography',
    )

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: /All Components/ })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggler = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
  })

  it('turns into a fixed white bar once the page scrolls', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('absolute')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
    fireEvent.scroll(window)

    expect(nav).toHaveClass('fixed', 'bg-white', 'shadow-nav')
    expect(screen.getByRole('link', { name: 'Structkit.' })).toHaveClass('text-heading')
  })

  it('starts in the scrolled state when the page is already scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 120, writable: true })
    render(<Navbar />)

    expect(screen.getByRole('navigation')).toHaveClass('fixed')
  })
})
