import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and a Home link', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Ascendly' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
