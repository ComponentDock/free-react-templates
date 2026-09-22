import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Gymcore')).toBeInTheDocument()
    expect(screen.getByText('BMI Calculator')).toBeInTheDocument()
    expect(screen.getByText('Story About Us')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Classes')).toBeInTheDocument()
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
    expect(screen.getByText('What Our Members Say')).toBeInTheDocument()
    expect(screen.getByText('Membership Plans')).toBeInTheDocument()
    expect(screen.getByText('Register Now')).toBeInTheDocument()
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Gymcore — Fitness Template')
  })
})
