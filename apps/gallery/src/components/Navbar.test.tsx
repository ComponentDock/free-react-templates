import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Story', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /dark mode/i })
    expect(toggle).toBeInTheDocument()

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    const lightToggle = screen.getByRole('button', { name: /light mode/i })
    await user.click(lightToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('cleans up dark mode class on unmount', () => {
    const { unmount } = render(<Navbar />)
    document.documentElement.classList.add('dark')
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
