import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Trainers } from './Trainers'
import { trainers } from '../data'

describe('Trainers', () => {
  it('renders four trainer cards with photo, name and role', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { level: 2, name: /Fitness Trainer/ })).toBeInTheDocument()
    for (const trainer of trainers) {
      expect(screen.getByAltText(trainer.name)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: trainer.name })).toBeInTheDocument()
      expect(screen.getAllByText(trainer.role).length).toBeGreaterThan(0)
    }
  })

  it('links each trainer to their social profiles', () => {
    render(<Trainers />)
    expect(screen.getByRole('link', { name: 'Twitter profile of Aron Mighty' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Instagram profile of Bruce Grapler' }),
    ).toBeInTheDocument()
  })
})
