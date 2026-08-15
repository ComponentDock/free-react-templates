import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Trainers } from './Trainers'
import { trainers, trainersEyebrow, trainersLead, trainersTitle } from '../data'

describe('Trainers', () => {
  it('renders the eyebrow, heading, intro, and four trainer cards in a grid', () => {
    const { container } = render(<Trainers />)
    expect(screen.getAllByText(trainersEyebrow).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(trainersTitle)
    expect(screen.getByText(trainersLead)).toBeInTheDocument()
    for (const trainer of trainers) {
      expect(screen.getAllByText(trainer.name).length).toBeGreaterThan(0)
    }
    // "Trainer" appears once as the eyebrow and once per card position.
    expect(screen.getAllByText('Trainer').length).toBe(trainers.length + 1)
    expect(container.querySelectorAll('img').length).toBe(trainers.length)
    expect(container.querySelectorAll('li').length).toBe(trainers.length)
  })

  it('turns the card background brand red with coral name on hover', () => {
    const { container } = render(<Trainers />)
    const card = container.querySelector('li')
    expect(card?.className).toMatch(/hover:bg-brand/)
    expect(card?.className).toMatch(/group/)
  })
})
