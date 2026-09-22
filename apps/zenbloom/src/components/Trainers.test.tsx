import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('renders 4 trainer cards', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { name: /The Best Trainer For You/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Elizabeth Nelson/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Scarlett Torres/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Victoria Wright/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Stella Perry/i })).toBeInTheDocument()
  })

  it('shows role labels', () => {
    render(<Trainers />)
    expect(screen.getAllByText('Owner / Head Coach').length).toBe(4)
  })
})
