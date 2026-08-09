import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavOverlay } from './NavOverlay'

describe('NavOverlay', () => {
  it('is hidden and inert when closed', () => {
    render(<NavOverlay open={false} onClose={() => {}} />)

    const overlay = document.querySelector('[data-state="closed"]')
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveClass('opacity-0')
    expect(overlay).toHaveClass('pointer-events-none')
    expect(document.body.style.overflow).toBe('')
  })

  it('shows the logo, tagline, and links when open', () => {
    render(<NavOverlay open onClose={() => {}} />)

    expect(screen.getByRole('heading', { name: 'Pulp' })).toBeInTheDocument()
    expect(screen.getByText('Magazine')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('colors the active (Home) link in gold', () => {
    render(<NavOverlay open onClose={() => {}} />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-gold')
  })

  it('locks body scroll while open and restores it on close', () => {
    const { rerender } = render(<NavOverlay open onClose={() => {}} />)

    expect(document.body.style.overflow).toBe('hidden')

    rerender(<NavOverlay open={false} onClose={() => {}} />)
    expect(document.body.style.overflow).toBe('')
  })

  it('restores body scroll on unmount while open', () => {
    const { unmount } = render(<NavOverlay open onClose={() => {}} />)
    expect(document.body.style.overflow).toBe('hidden')

    unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('closes via the close control', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NavOverlay open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when a navigation link is selected', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NavOverlay open onClose={onClose} />)

    await user.click(screen.getByRole('link', { name: 'Blog' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
