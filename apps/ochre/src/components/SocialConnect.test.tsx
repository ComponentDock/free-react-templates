import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialConnect } from './SocialConnect'
import { socialTileLabel, socialTiles } from '../data'

describe('SocialConnect', () => {
  it('renders six Instagram-style image tiles', () => {
    render(<SocialConnect />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(socialTiles.length)
    for (let i = 0; i < socialTiles.length; i += 1) {
      expect(screen.getByRole('link', { name: socialTileLabel(i + 1) })).toBeInTheDocument()
    }
  })
})
