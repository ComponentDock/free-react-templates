import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheadline and play button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Loving God, Loving Others, Serving God With All Your Heart/,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Submit your presence to the creator of the universe'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch our latest sermons' })).toBeInTheDocument()
    expect(screen.getByText('Watch our latest sermons')).toBeInTheDocument()
  })
})
