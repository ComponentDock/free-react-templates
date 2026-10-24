import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders six full-bleed tiles with hover captions', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Projects')
    const tiles = screen.getAllByRole('listitem')
    expect(tiles).toHaveLength(6)
    expect(screen.getByText('High Tower Works')).toBeInTheDocument()
    expect(screen.getByText('Infrastructure')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^Open / })).toHaveLength(6)
  })

  it('opens a lightbox, closes on Escape and restores focus to the tile control', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const control = screen.getByRole('button', { name: 'Open Northgate Depot' })
    await user.click(control)
    const dialog = screen.getByRole('dialog', { name: 'Northgate Depot' })
    expect(dialog).toBeInTheDocument()
    expect(screen.getByAltText('Northgate Depot')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/amberline-project-3/1600/1100',
    )
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the lightbox through its close control and refocuses the tile', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const control = screen.getByRole('button', { name: 'Open Foundry Lofts' })
    await user.click(control)
    await user.click(screen.getByRole('button', { name: 'Close the project' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(control).toHaveFocus()
  })
})
