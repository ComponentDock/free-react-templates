import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and description', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /advance your career/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/gain in-demand skills/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /browse courses/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /start free trial/i })).toBeInTheDocument()
  })

  it('renders learner count badge', () => {
    render(<Hero />)
    expect(screen.getByText(/15,000\+ learners/i)).toBeInTheDocument()
  })
})
