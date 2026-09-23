import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the split Cardwell logo and hamburger button', () => {
    render(<Header />)

    const logo = screen.getByLabelText('Cardwell home')
    expect(logo).toBeInTheDocument()
    expect(logo.textContent).toBe('Cardwell')

    expect(screen.getByRole('button', { name: /open navigation/i })).toBeInTheDocument()
  })

  it('toggles the sidebar open and closed on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toHaveClass('translate-x-full')

    await user.click(screen.getByRole('button', { name: /open navigation/i }))
    expect(nav).toHaveClass('translate-x-0')
    expect(screen.getByRole('button', { name: /close navigation/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close navigation/i }))
    expect(nav).toHaveClass('translate-x-full')
  })

  it('closes sidebar when sidebar close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open the sidebar
    await user.click(screen.getByRole('button', { name: /open navigation/i }))
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toHaveClass('translate-x-0')

    // Click the sidebar's own close button (different from header toggle)
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(nav).toHaveClass('translate-x-full')
  })
})
