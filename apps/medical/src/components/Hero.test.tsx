import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Care for Your Health Every Moment',
    )
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('GET STARTED')).toHaveAttribute('href', '#appointment')
  })
})
