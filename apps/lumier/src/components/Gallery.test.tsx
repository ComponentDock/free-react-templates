import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 18 photo items', () => {
    render(<Gallery />)
    const buttons = screen.getAllByRole('button', { name: /View photo/i })
    expect(buttons).toHaveLength(18)
  })

  it('opens lightbox when a photo is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const firstPhoto = screen.getByLabelText('View photo 1')
    await user.click(firstPhoto)
    expect(screen.getByRole('dialog', { name: 'Photo viewer' })).toBeInTheDocument()
  })

  it('closes lightbox when clicking the overlay', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByLabelText('View photo 1'))
    const dialog = screen.getByRole('dialog', { name: 'Photo viewer' })
    await user.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes lightbox when clicking the close button', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByLabelText('View photo 1'))
    await user.click(screen.getByLabelText('Close lightbox'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
