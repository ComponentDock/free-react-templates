import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RetroSection } from './RetroSection'
import { retroPosts } from '../data'

describe('RetroSection', () => {
  it('renders the retro band with four featured cards', () => {
    const { container } = render(<RetroSection />)

    expect(screen.getByRole('region', { name: 'Retro layout' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /The 20 Biggest Fintech/ })).toHaveLength(4)
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })

  it('shows the Travel, Nature, Sports and Lifestyle category tags', () => {
    render(<RetroSection />)

    for (const post of retroPosts) {
      expect(screen.getByText(post.categories[0]!.label)).toBeInTheDocument()
    }
  })

  it('shows the shared headline and date on every card', () => {
    render(<RetroSection />)

    expect(screen.getAllByText('February 12, 2019')).toHaveLength(4)
  })
})
