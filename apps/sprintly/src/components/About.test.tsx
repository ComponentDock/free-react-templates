import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Welcome to Sprintly/i })).toBeInTheDocument()
    expect(screen.getByText(/premier fitness destination/)).toBeInTheDocument()
  })

  it('shows the feature list', () => {
    render(<About />)
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
    expect(screen.getByText('Modern Equipment')).toBeInTheDocument()
    expect(screen.getByText('Flexible Schedules')).toBeInTheDocument()
  })
})
