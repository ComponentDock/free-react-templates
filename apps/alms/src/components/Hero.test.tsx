import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Every Gift Grows Into Hope',
    )
  })

  it('renders the watch-video play link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /watch video/i })
    expect(link).toHaveAttribute('href', '#fundraisers')
  })
})
