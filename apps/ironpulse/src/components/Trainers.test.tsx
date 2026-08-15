import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  trainers,
  trainersEyebrow,
  trainersRole,
  trainersSeeAllLabel,
  trainersTitle,
} from '../data'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('renders the eyebrow, heading, See All button, and three trainer cards', () => {
    const { container } = render(<Trainers />)
    expect(screen.getByText(trainersEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: trainersTitle })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: trainersSeeAllLabel })).toBeInTheDocument()

    for (const trainer of trainers) {
      expect(screen.getByRole('heading', { level: 3, name: trainer.name })).toBeInTheDocument()
      expect(
        screen.getByRole('img', { name: `${trainer.name} — ${trainersRole}` }),
      ).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(trainers.length)
  })

  it('links each trainer photo hover block to the booking target', () => {
    render(<Trainers />)
    for (const trainer of trainers) {
      expect(
        screen.getByRole('link', { name: `Book a session with ${trainer.name}` }),
      ).toHaveAttribute('href', '#events-section')
    }
  })
})
