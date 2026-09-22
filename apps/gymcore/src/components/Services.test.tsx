import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service items', () => {
    render(<Services />)
    expect(screen.getByText('Strategies')).toBeInTheDocument()
    expect(screen.getByText('Yoga')).toBeInTheDocument()
    expect(screen.getByText('Workout')).toBeInTheDocument()
    expect(screen.getByText('Weight Loss')).toBeInTheDocument()
  })
})
