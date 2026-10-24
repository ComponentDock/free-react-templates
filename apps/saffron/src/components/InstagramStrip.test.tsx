import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { instagramStripSeeds, instagramStripTitle } from '../data'

describe('InstagramStrip', () => {
  it('renders the follow heading above seven photos', () => {
    render(<InstagramStrip />)
    expect(screen.getByRole('heading', { level: 2, name: instagramStripTitle })).toBeInTheDocument()
    const region = screen.getByRole('region', { name: instagramStripTitle })
    expect(region.querySelectorAll('img')).toHaveLength(instagramStripSeeds.length)
    expect(screen.getAllByRole('link', { name: /Instagram photo/ })).toHaveLength(
      instagramStripSeeds.length,
    )
  })
})
