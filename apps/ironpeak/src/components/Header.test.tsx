import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header, navLinks } from './Header'

describe('Header', () => {
  it('shows the brand name and all nav links on desktop', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Ironpeak/i })).toHaveAttribute('href', '#home')
    for (const link of navLinks) {
      expect(
        screen.getByRole('navigation', { name: 'Primary' }).querySelector(`a[href="${link.href}"]`),
      ).toHaveTextContent(link.label)
    }
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(mobileNav.querySelector(`a[href="${link.href}"]`)).toHaveTextContent(link.label)
    }

    await user.click(screen.getByRole('button', { name: 'Close mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(document.body.style.overflow).toBe('hidden')

    fireEvent.click(screen.getByRole('navigation', { name: 'Mobile' }).querySelector('a')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('closes the mobile menu when Become a Member is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const becomeMemberLinks = screen.getAllByText('Become a Member')
    const mobileBecomeMember = becomeMemberLinks.at(-1)
    expect(mobileBecomeMember).toBeTruthy()
    fireEvent.click(mobileBecomeMember!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('stays open on other keys and closes on Escape', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    fireEvent.keyDown(document, { key: 'a' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
