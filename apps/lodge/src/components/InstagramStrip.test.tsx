import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { instagramSectionLabel, instagramSeeds, instagramTitle } from '../data'

describe('InstagramStrip', () => {
  it('renders the follow heading and four thumbnail images', () => {
    render(<InstagramStrip />)
    expect(screen.getByRole('region', { name: instagramSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(instagramTitle)

    for (const [index, seed] of instagramSeeds.entries()) {
      const image = screen.getByAltText(`Instagram image ${index + 1}`)
      expect(image).toHaveAttribute('src', expect.stringContaining(`seed/${seed}/`))
    }
  })
})
