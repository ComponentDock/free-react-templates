import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()
  })

  it('renders 4 feature cards with icons and titles', () => {
    render(<Features />)

    const titles = ['Safe Travel', 'Diverse Destinations', 'Guided Tours', '24/7 Support']
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    // Each feature has an icon rendered via lucide
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })
})
