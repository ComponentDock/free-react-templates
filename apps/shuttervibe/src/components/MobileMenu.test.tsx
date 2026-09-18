import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileMenu } from './MobileMenu'

describe('MobileMenu', () => {
  const defaultProps = {
    open: false,
    onClose: vi.fn(),
    activePage: 'home' as const,
    onNavigate: vi.fn(),
  }

  it('renders the dialog element', () => {
    render(<MobileMenu {...defaultProps} />)
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('applies open transform class when open', () => {
    render(<MobileMenu {...defaultProps} open />)
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(dialog).toHaveClass('translate-x-0')
  })

  it('applies closed transform class when closed', () => {
    render(<MobileMenu {...defaultProps} open={false} />)
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(dialog).toHaveClass('translate-x-full')
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<MobileMenu {...defaultProps} open onClose={onClose} />)

    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    const closeBtn = dialog.querySelector('button[aria-label="Close menu"]') as Element
    await user.click(closeBtn)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<MobileMenu {...defaultProps} open onClose={onClose} />)

    const backdrop = document.querySelector('[aria-hidden="true"]') as Element
    await user.click(backdrop)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onNavigate and onClose when a link is clicked', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    const onClose = vi.fn()
    render(<MobileMenu {...defaultProps} open onNavigate={onNavigate} onClose={onClose} />)

    await user.click(screen.getByText('Photos'))
    expect(onNavigate).toHaveBeenCalledWith('photos')
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('highlights active page link', () => {
    render(<MobileMenu {...defaultProps} open activePage="photos" />)
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    const links = dialog.querySelectorAll('a')
    const photos = Array.from(links).find((l) => l.textContent === 'Photos')
    expect(photos).toHaveClass('text-brand')
  })
})
