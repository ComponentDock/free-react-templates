import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and six captioned photos', () => {
    render(<Gallery />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'A Glimpse of Sooth' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^View photo:/ })).toHaveLength(6)
    expect(screen.getByAltText('Spa Treatment Room')).toBeInTheDocument()
    expect(screen.getByAltText('Facial Treatment Session')).toBeInTheDocument()
  })

  it('opens the lightbox on click and closes via the close button', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'View photo: Relaxation Lounge' }))
    expect(screen.getByRole('dialog', { name: 'Relaxation Lounge' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close photo' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the lightbox on Escape but ignores other keys', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'View photo: Luxury Skincare Products' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('a')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes when the backdrop is clicked but not the inner image', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'View photo: Massage Therapy Suite' }))
    const dialog = screen.getByRole('dialog')
    await user.click(within(dialog).getByAltText('Massage Therapy Suite'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
