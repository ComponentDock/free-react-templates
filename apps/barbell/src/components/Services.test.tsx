import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section title and all four lime tiles', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Join Our Gym Today' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Crossfit' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fitness' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Climbing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cardio + Streching' })).toBeInTheDocument()
  })
})
