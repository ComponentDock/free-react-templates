import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Categories } from './Categories'
import { categories } from '../data'

describe('Categories', () => {
  it('renders one large tile and four grid tiles with black text boxes', () => {
    const { container } = render(<Categories />)
    const tiles = container.querySelectorAll('article')
    expect(tiles.length).toBe(5)

    for (const tile of categories.tiles) {
      expect(screen.getByRole('heading', { level: 3, name: tile.name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('2373 Listings').length).toBe(5)
    expect(screen.getAllByRole('link', { name: 'View All' }).length).toBe(5)
  })

  it('opens and closes the lightbox with the photo', async () => {
    const user = userEvent.setup()
    render(<Categories />)

    const zoom = screen.getAllByRole('button', { name: /Zoom/ })[0]!
    await user.click(zoom)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAccessibleName(`${categories.tiles[0].name} photo`)
    expect(dialog.querySelector('img')).toHaveAttribute('src', categories.tiles[0].image)

    await user.click(screen.getByRole('button', { name: 'Close lightbox' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the lightbox when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<Categories />)

    await user.click(screen.getAllByRole('button', { name: /Zoom/ })[1]!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('dialog'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
