import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, phone, nav links, volunteer CTA, and toggles dark mode', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Leopet' })).toHaveAttribute('href', '#top')
    expect(screen.getByText('+02 213 - 256 (365)')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Become a Volunteer' })).toHaveAttribute(
      'href',
      '#adopt',
    )

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
