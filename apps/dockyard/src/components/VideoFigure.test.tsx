import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VideoFigure } from './VideoFigure'
import { about } from '../data'

describe('VideoFigure', () => {
  it('lifts a 1,110-wide figure with an 80px play disc', () => {
    const { container } = render(<VideoFigure />)

    expect(container.firstElementChild).toHaveClass('-mt-40')
    expect(screen.getByRole('img', { name: /container/i })).toHaveAttribute(
      'src',
      about.videoPoster,
    )

    const disc = screen.getByRole('button', { name: 'Play the Dockyard showreel' })
    expect(disc).toHaveClass('size-20', 'rounded-full', 'hover:size-[90px]')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens a dismissible dialog from the play disc', () => {
    render(<VideoFigure />)

    fireEvent.click(screen.getByRole('button', { name: 'Play the Dockyard showreel' }))

    const dialog = screen.getByRole('dialog', { name: 'Dockyard showreel' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveTextContent('Showreel placeholder')

    fireEvent.click(screen.getByRole('button', { name: 'Close the showreel' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes on Escape and ignores every other key', () => {
    render(<VideoFigure />)
    fireEvent.click(screen.getByRole('button', { name: 'Play the Dockyard showreel' }))

    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
