import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedTrack } from './FeaturedTrack'

describe('FeaturedTrack', () => {
  it('renders artist name', () => {
    render(<FeaturedTrack />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Frando Kally')
  })

  it('shows the date', () => {
    render(<FeaturedTrack />)
    expect(screen.getByText('January 20, 2024')).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<FeaturedTrack />)
    expect(screen.getByRole('button', { name: 'Play featured track' })).toBeInTheDocument()
  })

  it('renders the Buy Album button', () => {
    render(<FeaturedTrack />)
    expect(screen.getByRole('button', { name: 'Buy Album' })).toBeInTheDocument()
  })

  it('renders the artist image', () => {
    render(<FeaturedTrack />)
    const img = screen.getByRole('img', { name: 'Frando Kally' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
