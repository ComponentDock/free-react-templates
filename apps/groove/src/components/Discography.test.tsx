import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Discography } from './Discography'

describe('Discography', () => {
  it('renders the section heading and subtitle', () => {
    render(<Discography />)

    expect(screen.getByText('Our Discography')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /newest albums/ })).toBeInTheDocument()
  })

  it('renders all 8 album cards with titles and artists', () => {
    render(<Discography />)

    const albumTitles = [
      'Midnight Pulse',
      'Neon Dreams',
      'Deep Resonance',
      'Velvet Frequency',
      'Solar Flare',
      'Urban Pulse',
      'Crystal Waves',
      'Shadow Groove',
    ]

    for (const title of albumTitles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }

    const artists = screen.getAllByText(
      /Electra|Synthwave|Bass Theory|Echo Chamber|Cosmic Drift|City Beats|Aqua Sound|Night Circuit/,
    )
    expect(artists.length).toBe(8)
  })

  it('renders album cover images', () => {
    render(<Discography />)

    const images = screen.getAllByRole('img', { name: /album cover/i })
    expect(images).toHaveLength(8)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('renders a Buy on iTunes button', () => {
    render(<Discography />)

    expect(screen.getByRole('link', { name: /Buy on iTunes/ })).toBeInTheDocument()
  })
})
