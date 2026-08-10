import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Classes } from './Classes'

describe('Classes', () => {
  it('shows the Workout Classes heading', () => {
    render(<Classes />)

    expect(screen.getByRole('heading', { level: 2, name: 'Workout Classes' })).toBeInTheDocument()
  })

  it('renders the four class cards with Learn More links', () => {
    render(<Classes />)

    for (const title of ['Body Building', 'Aerobic Classes', 'Weight Lifting', 'Yoga Classes']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(4)
  })
})
