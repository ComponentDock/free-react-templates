import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header onMenuToggle={() => {}} />)
    expect(screen.getByText('Echo')).toBeInTheDocument()
  })

  it('calls onMenuToggle when hamburger is clicked', async () => {
    const onMenuToggle = vi.fn()
    const user = userEvent.setup()
    render(<Header onMenuToggle={onMenuToggle} />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    expect(onMenuToggle).toHaveBeenCalledTimes(1)
  })
})
