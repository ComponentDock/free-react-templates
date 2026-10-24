import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Experts } from './Experts'
import { trainers } from '../data'

describe('Experts', () => {
  it('renders the white heading, the collage and the four name plates', () => {
    render(<Experts />)
    expect(screen.getByRole('heading', { level: 2, name: 'Ask the experts' })).toBeInTheDocument()

    for (const trainer of trainers) {
      expect(screen.getByRole('img', { name: `${trainer.name}, ${trainer.role}` })).toBeInTheDocument()
      expect(screen.getByText(trainer.name)).toBeInTheDocument()
    }

    expect(screen.getAllByText('Personal trainer')).toHaveLength(3)
    expect(screen.getAllByText('Fitness trainer')).toHaveLength(1)
    expect(document.querySelectorAll('[data-compact="true"]')).toHaveLength(3)
  })
})
