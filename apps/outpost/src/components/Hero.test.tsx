import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the illustrated hero with the eyebrow and serif wordmark', () => {
    render(<Hero />)

    const hero = screen.getByTestId('hero')
    expect(hero).toHaveClass('min-h-[650px]', 'xl:min-h-[900px]')

    const wordmark = screen.getByRole('heading', { level: 2 })
    expect(wordmark).toHaveTextContent('Outpost')
    expect(wordmark).toHaveClass('font-display', 'xl:text-[120px]')

    expect(screen.getByText('Plan a trip to Santorini Village')).toBeInTheDocument()
  })

  it('layers the brand gradient sky and the mountain and forest silhouettes over the photo', () => {
    const { container } = render(<Hero />)

    expect(container.querySelectorAll('.brand-gradient')).toHaveLength(1)
    expect(container.querySelectorAll('div[aria-hidden="true"]')).toHaveLength(3)
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/outpost-hero/1920/1200',
    )
  })
})
