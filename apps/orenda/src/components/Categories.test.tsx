import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section title and every category card', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { name: "Let's Browse All Categories" })).toBeInTheDocument()
    for (const title of [
      'Web Design',
      'App Development',
      'Video Editing',
      'Digital Marketing',
      'SEO Marketing',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(5)
  })

  it('renders a card that fills indigo on hover with white text', () => {
    const { container } = render(<Categories />)
    const firstCard = container.querySelector('[data-testid="category-card-0"]')
    expect(firstCard).toHaveClass('hover:bg-brand')
    expect(firstCard).toHaveClass('hover:text-white')
  })
})
