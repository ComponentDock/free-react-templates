import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header, navLinks } from './Header'

describe('Header', () => {
  it('shows the site name and all anchor links on desktop', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Sweatly.' })).toHaveAttribute('href', '#home')
    for (const link of navLinks) {
      expect(
        screen.getByRole('navigation', { name: 'Primary' }).querySelector(`a[href="${link.href}"]`),
      ).toHaveTextContent(link.label)
    }
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('opens and closes the off-canvas mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(mobileNav.querySelector(`a[href="${link.href}"]`)).toHaveTextContent(link.label)
    }

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.click(container.querySelector('.bg-black\\/60')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu on Escape and on other keys it stays open', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    fireEvent.keyDown(document, { key: 'a' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked and unlocks body scroll', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(document.body.style.overflow).toBe('hidden')

    fireEvent.click(screen.getByRole('navigation', { name: 'Mobile' }).querySelector('a')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })
})
