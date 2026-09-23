import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('SignWell')).toBeInTheDocument()
  })

  it('has a dark mode toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument()
  })

  it('toggles dark mode on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggle)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()
  })

  it('removes dark class on cleanup', () => {
    const { unmount } = render(<Navbar />)
    document.documentElement.classList.add('dark')
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
