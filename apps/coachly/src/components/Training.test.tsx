import { render, screen } from '@testing-library/react'
import { Training } from './Training'

describe('Training', () => {
  it('renders all 6 training items', () => {
    render(<Training />)
    expect(screen.getByText('Our Training')).toBeInTheDocument()
    expect(screen.getByText('Life Planning')).toBeInTheDocument()
    expect(screen.getByText('Career Coaching')).toBeInTheDocument()
    expect(screen.getByText('Mindfulness')).toBeInTheDocument()
    expect(screen.getByText('Relationship Skills')).toBeInTheDocument()
    expect(screen.getByText('Goal Setting')).toBeInTheDocument()
    expect(screen.getByText('Stress Management')).toBeInTheDocument()
  })
})
