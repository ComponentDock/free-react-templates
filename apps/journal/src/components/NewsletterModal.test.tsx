import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { newsletterModalCloseLabel, newsletterModalText, newsletterModalTitle } from '../data'
import { NewsletterModal } from './NewsletterModal'

describe('NewsletterModal', () => {
  it('renders the dialog with a title, text and newsletter form', () => {
    render(<NewsletterModal onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog', { name: newsletterModalTitle })
    expect(screen.getByRole('heading', { name: newsletterModalTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterModalText)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('closes via the red close button', () => {
    const onClose = vi.fn()
    render(<NewsletterModal onClose={onClose} />)

    fireEvent.click(screen.getByRole('button', { name: newsletterModalCloseLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when the backdrop is clicked', () => {
    const onClose = vi.fn()
    const { container } = render(<NewsletterModal onClose={onClose} />)

    const backdrop = container.querySelector('div[aria-hidden="true"]')
    expect(backdrop).not.toBeNull()
    fireEvent.click(backdrop!)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
