import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { VideoTeaser } from './VideoTeaser'

describe('VideoTeaser', () => {
  it('renders the teaser copy and a circular play control', () => {
    render(<VideoTeaser />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'A day on the island' }),
    ).toBeInTheDocument()
    expect(screen.getByText("A trip organized by Trailmark's team")).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play the island video' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens a modal from the play button and closes it with Escape or the close control', () => {
    render(<VideoTeaser />)
    fireEvent.click(screen.getByRole('button', { name: 'Play the island video' }))
    expect(screen.getByRole('dialog', { name: 'Island video' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('dialog', { name: 'Island video' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Play the island video' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
