import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { instagramSeeds, instagramTileLabel, instagramTitle } from '../data'

describe('InstagramStrip', () => {
  it('renders the centered heading and all eight image tiles', () => {
    render(<InstagramStrip />)
    expect(screen.getByRole('heading', { name: instagramTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(instagramSeeds.length)

    const first = screen.getByAltText(instagramTileLabel(0))
    expect(first).toHaveAttribute('src', expect.stringContaining(instagramSeeds[0]!))
  })
})
