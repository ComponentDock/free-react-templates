import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and a dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Zest/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('button', { name: /dark mode|light mode/i })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root when pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
