import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, CTA and background photo', () => {
    const { container } = render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /Turn On The Feeling With Music/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download Template' })).toHaveAttribute(
      'href',
      '#shows',
    )
    expect(container.querySelector('img')).toBeInTheDocument()
  })
})
