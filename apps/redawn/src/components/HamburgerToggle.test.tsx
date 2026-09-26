import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HamburgerToggle } from './HamburgerToggle'

describe('HamburgerToggle', () => {
  it('renders with aria-label', () => {
    render(<HamburgerToggle isOpen={false} onToggle={vi.fn()} />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })

  it('shows aria-expanded false when closed', () => {
    render(<HamburgerToggle isOpen={false} onToggle={vi.fn()} />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('shows aria-expanded true when open', () => {
    render(<HamburgerToggle isOpen={true} onToggle={vi.fn()} />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('calls onToggle when clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<HamburgerToggle isOpen={false} onToggle={onToggle} />)
    await user.click(screen.getByRole('button', { name: /toggle menu/i }))
    expect(onToggle).toHaveBeenCalledOnce()
  })
})
