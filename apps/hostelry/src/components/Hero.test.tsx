import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the kicker, headline, paragraph and Get Started button', () => {
    render(<Hero />)
    expect(screen.getByText('Away from monotonous life')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Relax Your Mind', level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute(
      'href',
      '#accomodation',
    )
  })
})
