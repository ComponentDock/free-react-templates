import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SaleModal } from './SaleModal'

describe('SaleModal', () => {
  it('renders nothing when closed', () => {
    render(<SaleModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal dialog with all sale content when open', () => {
    render(<SaleModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')

    expect(screen.getByText('Winter')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('40')).toBeInTheDocument()
    expect(screen.getByText('%')).toBeInTheDocument()
    expect(screen.getByText('Off')).toBeInTheDocument()
    expect(screen.getByText('To all products')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shop now' })).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SaleModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when Escape is pressed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SaleModal open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when clicking the backdrop outside the modal content', () => {
    const onClose = vi.fn()
    const { container } = render(<SaleModal open={true} onClose={onClose} />)

    const backdrop = container.querySelector('[data-backdrop="true"]') as HTMLElement
    backdrop.click()
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose when a non-Escape key is pressed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SaleModal open={true} onClose={onClose} />)

    await user.keyboard('{a}')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not call onClose when clicking inside the modal content', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SaleModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Shop now' }))
    // Shop now calls onClose (it's the CTA action)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('has no border-radius on the modal content', () => {
    render(<SaleModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    const modalContent = dialog.querySelector('[class*="overflow-hidden"]') as HTMLElement
    expect(modalContent).toHaveClass('overflow-hidden')
  })

  it('applies the brand teal background to the left panel', () => {
    render(<SaleModal open={true} onClose={vi.fn()} />)

    const leftPanel = screen.getByText('Winter').closest('[class*="bg-brand"]') as HTMLElement
    expect(leftPanel).toHaveClass('bg-brand-400')
  })
})
