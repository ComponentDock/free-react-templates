import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Professional/)).toBeInTheDocument()
    expect(screen.getByText(/Pressure/)).toBeInTheDocument()
    expect(screen.getByText(/Washing/)).toBeInTheDocument()
    expect(screen.getByText(/Services/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})
