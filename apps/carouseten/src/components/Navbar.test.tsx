import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the template name', () => {
    render(<Navbar />)
    expect(screen.getByText('Carouseten')).toBeInTheDocument()
  })

  it('renders a Home link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/')
  })

  it('renders a dark mode toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument()
  })

  it('toggles dark class on html when dark mode button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggleButton)

    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()
  })

  it('removes dark class on unmount', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggleButton)
    expect(document.documentElement).toHaveClass('dark')

    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
