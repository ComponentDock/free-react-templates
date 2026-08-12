import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'
import { GALLERY_IMAGES } from '../data'

describe('Gallery', () => {
  it('renders the Screens Gallery title and four images', () => {
    const { container } = render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Screens Gallery')
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })

  it('opens a lightbox on image click and closes it', async () => {
    const user = userEvent.setup()
    const { container } = render(<Gallery />)
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(4)

    await user.click(buttons[0] as HTMLButtonElement)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    const lightboxImg = dialog.querySelector('img')
    expect(lightboxImg?.getAttribute('src')).toBe(GALLERY_IMAGES[0])

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the lightbox when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Gallery />)
    await user.click(container.querySelectorAll('button')[1] as HTMLButtonElement)
    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
