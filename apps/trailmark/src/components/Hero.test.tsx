import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the amber watermark word and the white headline', () => {
    render(<Hero />)
    expect(screen.getByText('discover')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Discover new worlds' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /coastal town at sunset/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/trailmark-hero/1920/1080',
    )
  })
})
