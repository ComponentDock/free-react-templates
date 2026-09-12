import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading and all 6 gallery images', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Gallery' })).toBeInTheDocument()

    const buttons = screen.getAllByRole('button', { name: /view/i })
    expect(buttons.length).toBe(6)
  })

  it('opens a lightbox dialog when an image is clicked and closes it on close button', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    const buttons = screen.getAllByRole('button', { name: /view/i })
    const firstImage = buttons[0]
    expect(firstImage).toBeDefined()
    await user.click(firstImage!)

    expect(screen.getByRole('dialog', { name: 'Image preview' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Gallery preview' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close preview' }))
    expect(screen.queryByRole('dialog', { name: 'Image preview' })).not.toBeInTheDocument()
  })

  it('closes the lightbox when clicking the backdrop', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    const buttons = screen.getAllByRole('button', { name: /view/i })
    await user.click(buttons[0]!)

    const dialog = screen.getByRole('dialog', { name: 'Image preview' })
    expect(dialog).toBeInTheDocument()

    // Click the backdrop (the dialog overlay itself, not the image container)
    await user.click(dialog)

    expect(screen.queryByRole('dialog', { name: 'Image preview' })).not.toBeInTheDocument()
  })

  it('does not close the lightbox when clicking the image container', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    const buttons = screen.getAllByRole('button', { name: /view/i })
    await user.click(buttons[0]!)

    const previewImage = screen.getByRole('img', { name: 'Gallery preview' })
    expect(previewImage).toBeInTheDocument()

    // Click the image container (stopPropagation should prevent close)
    await user.click(previewImage)

    // Lightbox should still be open
    expect(screen.getByRole('dialog', { name: 'Image preview' })).toBeInTheDocument()
  })
})
