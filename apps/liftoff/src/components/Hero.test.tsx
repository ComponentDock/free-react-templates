import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext, CTA and illustration', () => {
    const { container } = render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Grow Your Business Faster' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute(
      'href',
      '#features-section',
    )
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/liftoff-1/560/560',
    )
  })
})
