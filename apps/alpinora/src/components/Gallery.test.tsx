import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the gallery photos and vertical arrow controls', () => {
    render(<Gallery />)
    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(screen.getByRole('button', { name: 'Previous image' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next image' })).toBeInTheDocument()
  })

  it('steps the carousel with the up/down controls and clamps at the ends', () => {
    render(<Gallery />)
    const track = screen.getByRole('region', { name: 'Gallery carousel' })
    const up = screen.getByRole('button', { name: 'Previous image' })
    const down = screen.getByRole('button', { name: 'Next image' })
    expect(track).toHaveAttribute('data-index', '0')
    expect(up).toBeDisabled()
    fireEvent.click(down)
    fireEvent.click(down)
    fireEvent.click(down)
    expect(track).toHaveAttribute('data-index', '3')
    expect(down).toBeDisabled()
    fireEvent.click(up)
    expect(track).toHaveAttribute('data-index', '2')
  })
})
