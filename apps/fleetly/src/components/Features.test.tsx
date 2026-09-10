import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders six feature cards with titles and descriptions', () => {
    render(<Features />)

    expect(screen.getByText('What Services we offer to our clients')).toBeInTheDocument()

    const titles = [
      'Expert Technicians',
      'Professional Service',
      'Great Support',
      'Technical Skills',
      'Highly Recommended',
      'Positive Reviews',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(6)
  })

  it('renders icons for each feature card', () => {
    const { container } = render(<Features />)
    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(6)
    for (const article of articles) {
      expect(article.querySelector('svg')).toBeInTheDocument()
    }
  })
})
