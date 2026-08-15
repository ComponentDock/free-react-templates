import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers, trainers } from './Trainers'

describe('Trainers', () => {
  it('shows the heading and four trainer cards with photo, name, and bio', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Meet the Trainers/)
    for (const trainer of trainers) {
      expect(screen.getByRole('heading', { name: trainer.name })).toBeInTheDocument()
      expect(screen.getByText(trainer.bio)).toBeInTheDocument()
      expect(screen.getByAltText(`${trainer.name} portrait`)).toHaveAttribute('src', trainer.photo)
    }
  })
})
