import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the heading and all eight speaker cards', () => {
    render(<Speakers />)
    expect(screen.getByRole('heading', { name: /Learn from the Best/i })).toBeInTheDocument()
    for (const name of [
      'Dr. Maya Patel',
      'Andrej Kovalenko',
      'Dr. Sophia Chen',
      'Marcus Thompson',
      'Dr. Yuki Tanaka',
      'James Okonkwo',
      'Dr. Elena Rossi',
      'Kevin Park',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('VP of Research, Anthropic')).toBeInTheDocument()
    expect(screen.getByText('Founding Engineer, Replicate')).toBeInTheDocument()
  })

  it('renders a portrait image for every speaker', () => {
    render(<Speakers />)
    const portraits = screen.getAllByRole('img')
    expect(portraits).toHaveLength(8)
  })
})
