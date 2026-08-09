import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedEpisode } from './FeaturedEpisode'

describe('FeaturedEpisode', () => {
  it('renders the light featured band with meta, title, guest, description, and tags', () => {
    render(<FeaturedEpisode />)

    expect(screen.getByText('Latest Episode')).toBeInTheDocument()
    expect(screen.getByText('EP. 247 · Feb 18, 2026 · 58 min')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Building a $100M Company with No Funding' }),
    ).toBeInTheDocument()
    expect(screen.getByText('with Sarah Chen, Founder of TechFlow')).toBeInTheDocument()
    expect(screen.getByText(/Sarah shares the story/i)).toBeInTheDocument()
    for (const tag of ['Startup', 'Bootstrapping', 'Growth']) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Play episode' })).toBeInTheDocument()
  })
})
