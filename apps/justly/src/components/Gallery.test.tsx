import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders six gallery items', () => {
    render(<Gallery />)
    expect(screen.getByText('Muscle Building')).toBeInTheDocument()
    expect(screen.getByText('Cardio Training')).toBeInTheDocument()
    expect(screen.getByText('Flexibility')).toBeInTheDocument()
    expect(screen.getByText('Cross Training')).toBeInTheDocument()
    expect(screen.getByText('HIIT Workouts')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Plans')).toBeInTheDocument()
  })

  it('renders gallery images', () => {
    render(<Gallery />)
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(6)
  })
})
