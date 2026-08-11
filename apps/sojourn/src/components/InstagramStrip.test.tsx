import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { stripCount, stripTileLabel } from '../data'

describe('InstagramStrip', () => {
  it('renders a full-width strip of six Instagram tiles', () => {
    render(<InstagramStrip />)
    expect(screen.getByRole('region', { name: 'Instagram strip' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(stripCount)
    expect(screen.getByAltText(stripTileLabel(0))).toBeInTheDocument()
    expect(screen.getByAltText(stripTileLabel(stripCount - 1))).toBeInTheDocument()
  })
})
