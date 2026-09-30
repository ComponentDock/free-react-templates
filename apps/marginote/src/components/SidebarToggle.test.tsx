import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SidebarToggle } from './SidebarToggle'

describe('SidebarToggle', () => {
  it('renders a button with accessible label', () => {
    render(<SidebarToggle isOpen onToggle={() => {}} />)
    expect(screen.getByRole('button', { name: /close sidebar/i })).toBeInTheDocument()
  })

  it('shows "Open sidebar" label when sidebar is closed', () => {
    render(<SidebarToggle isOpen={false} onToggle={() => {}} />)
    expect(screen.getByRole('button', { name: /open sidebar/i })).toBeInTheDocument()
  })

  it('calls onToggle when clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<SidebarToggle isOpen onToggle={onToggle} />)
    await user.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
