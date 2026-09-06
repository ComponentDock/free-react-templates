import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConsultationModal } from './ConsultationModal'

describe('ConsultationModal', () => {
  it('does not render when closed', () => {
    render(<ConsultationModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(<ConsultationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
    expect(screen.getByText('Booking an Appointment')).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<ConsultationModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when Escape is pressed on the dialog', () => {
    const onClose = vi.fn()
    render(<ConsultationModal open={true} onClose={onClose} />)

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' })
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when clicking the backdrop outside the modal content', () => {
    const onClose = vi.fn()
    const { container } = render(<ConsultationModal open={true} onClose={onClose} />)

    const backdrop = container.querySelector('[data-backdrop="true"]') as HTMLElement
    backdrop.click()
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose when clicking inside the modal content', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<ConsultationModal open={true} onClose={onClose} />)

    await user.click(screen.getByLabelText('Full Name'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('displays all form fields', () => {
    render(<ConsultationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<ConsultationModal open={true} onClose={vi.fn()} />)

    await user.type(screen.getByLabelText('Full Name'), 'John Doe')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByLabelText('Full Name')).toHaveValue('John Doe')
  })

  it('does not call onClose when pressing non-Escape key', () => {
    const onClose = vi.fn()
    render(<ConsultationModal open={true} onClose={onClose} />)

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Enter' })
    expect(onClose).not.toHaveBeenCalled()
  })
})
