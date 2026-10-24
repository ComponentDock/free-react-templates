import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Trainers } from './Trainers'
import { trainerRole, trainers, trainersCta, trainersHeading } from '../data'

describe('Trainers', () => {
  it('renders three trainers with always-visible plus tabs', () => {
    render(<Trainers />)
    const section = screen.getByRole('region', { name: 'Our trainers' })

    for (const trainer of trainers) {
      expect(screen.getByRole('heading', { level: 3, name: trainer.name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: trainer.alt })).toHaveAttribute('src', trainer.image)
    }
    expect(screen.getAllByText(trainerRole)).toHaveLength(trainers.length)
    expect(section.querySelectorAll('[data-trainer-tab]')).toHaveLength(trainers.length)
    expect(screen.getByRole('heading', { level: 2, name: trainersHeading })).toBeInTheDocument()
  })

  it('pins a See All button to the heading block', () => {
    render(<Trainers />)
    const cta = screen.getByRole('link', { name: trainersCta })
    expect(cta).toHaveAttribute('href', '#classes')
    expect(cta.className).toContain('bg-ink')
  })
})
