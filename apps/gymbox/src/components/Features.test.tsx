import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the Our Features heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2, name: /our features/i })).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Modern Equipment')).toBeInTheDocument()
    expect(screen.getByText('Healthy Diet Plan')).toBeInTheDocument()
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
    expect(screen.getByText('Cardio Zone')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/state-of-the-art machines/i)).toBeInTheDocument()
    expect(screen.getByText(/personalized nutrition plans/i)).toBeInTheDocument()
    expect(screen.getByText(/certified and experienced trainers/i)).toBeInTheDocument()
    expect(screen.getByText(/dedicated cardio area/i)).toBeInTheDocument()
  })
})
