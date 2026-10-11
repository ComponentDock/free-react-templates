import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ModalShowcase } from './ModalShowcase'

describe('ModalShowcase', () => {
  it('renders the launch trigger without a dialog', () => {
    render(<ModalShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Modal')
    expect(screen.getByRole('button', { name: 'Launch Demo Modal' })).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the dialog with focus inside and closes on Escape returning focus', async () => {
    const user = userEvent.setup()
    render(<ModalShowcase />)

    const trigger = screen.getByRole('button', { name: 'Launch Demo Modal' })
    await user.click(trigger)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByRole('heading', { level: 5, name: 'Modal title' })).toBeInTheDocument()
    expect(screen.getAllByText(/mist enveloped the ship/i)).toHaveLength(1)
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Dismiss modal' }))

    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(trigger)
  })

  it('closes through the close button', async () => {
    const user = userEvent.setup()
    render(<ModalShowcase />)

    const trigger = screen.getByRole('button', { name: 'Launch Demo Modal' })
    await user.click(trigger)
    await user.click(screen.getByRole('button', { name: 'Dismiss modal' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(trigger)
  })

  it('closes through the backdrop', async () => {
    const user = userEvent.setup()
    render(<ModalShowcase />)

    const trigger = screen.getByRole('button', { name: 'Launch Demo Modal' })
    await user.click(trigger)
    await user.click(screen.getByRole('button', { name: 'Close modal backdrop' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(trigger)
  })
})
