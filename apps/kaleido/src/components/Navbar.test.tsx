import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Kaleido')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /colors/i })).toHaveAttribute('href', '#colors')
    expect(screen.getByRole('link', { name: /typography/i })).toHaveAttribute('href', '#typography')
    expect(screen.getByRole('link', { name: /buttons/i })).toHaveAttribute('href', '#buttons')
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()
  })

  it('cleans up dark class on unmount', () => {
    const { unmount } = render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /dark mode/i })
    toggle.click()
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
