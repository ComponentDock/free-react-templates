import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { gallery } from '../data'

describe('Gallery', () => {
  it('renders five labelled tiles with a hover wash', () => {
    const { container } = render(<Gallery />)
    const tiles = screen.getAllByRole('button', { name: /^Open / })
    expect(tiles).toHaveLength(5)
    expect(tiles.map((tile) => tile.getAttribute('aria-label'))).toEqual(
      gallery.map((item) => `Open ${item.label}`),
    )
    expect(screen.getAllByRole('img')).toHaveLength(5)
    const wash = container.querySelectorAll('.group-hover\\:bg-ink\\/30')
    expect(wash).toHaveLength(5)
  })

  it('opens a dialog and closes it with the close control', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const trigger = screen.getByRole('button', { name: 'Open Harbour wayfinding signage' })
    await user.click(trigger)
    const dialog = screen.getByRole('dialog', { name: 'Harbour wayfinding signage' })
    expect(dialog).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close the image' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('closes the dialog on Escape and ignores other keys', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Open Studio portrait series' }))
    await user.keyboard('{a}')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
