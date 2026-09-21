import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading and all 3 pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing For Courses')).toBeInTheDocument()
    expect(screen.getByText('Weight Lifting')).toBeInTheDocument()
    expect(screen.getByText('Crossfit Training')).toBeInTheDocument()
    expect(screen.getByText('Cardio Blast')).toBeInTheDocument()
  })

  it('renders prices and Enroll Now buttons', () => {
    render(<Pricing />)
    expect(screen.getAllByText('$240')).toHaveLength(3)
    expect(screen.getAllByText('Enroll Now')).toHaveLength(3)
  })
})
