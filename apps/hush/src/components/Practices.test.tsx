import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Practices } from './Practices'

describe('Practices', () => {
  it('renders the heading and six practice cards', () => {
    render(<Practices />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Ancient Paths to the Present' }),
    ).toBeInTheDocument()
    for (const title of [
      'Centering Prayer',
      'Lectio Divina',
      'Walking Meditation',
      'Labyrinth Walk',
      'Examen',
      'Silent Sitting',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('gives each card a description', () => {
    render(<Practices />)
    expect(screen.getByText(/method of silent prayer/)).toBeInTheDocument()
    expect(screen.getByText(/winding path through the meadow/)).toBeInTheDocument()
  })
})
