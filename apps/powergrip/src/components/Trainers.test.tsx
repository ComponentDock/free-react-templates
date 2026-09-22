import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Trainers } from './Trainers'
import { trainers, trainersTitle, trainersSubtitle } from '../data'

describe('Trainers', () => {
  it('renders the heading and subtitle', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { level: 2, name: trainersTitle })).toBeInTheDocument()
    expect(screen.getAllByText(trainersSubtitle).length).toBeGreaterThan(0)
  })

  it('renders all four trainer cards', () => {
    render(<Trainers />)
    for (const trainer of trainers) {
      expect(screen.getByRole('heading', { level: 3, name: trainer.name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: trainer.name })).toBeInTheDocument()
      expect(screen.getAllByText(trainer.specialty).length).toBeGreaterThan(0)
    }
  })
})
