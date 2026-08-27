import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders the section heading', () => {
    render(<ServicesGrid />)
    expect(screen.getByText('Fitness Services')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<ServicesGrid />)
    expect(screen.getByText('Be Fit')).toBeInTheDocument()
    expect(screen.getByText('Join Club')).toBeInTheDocument()
    expect(screen.getByText('Gym Fitness')).toBeInTheDocument()
    expect(screen.getByText('Eat Healthy')).toBeInTheDocument()
    expect(screen.getByText('Fruit Juices')).toBeInTheDocument()
    expect(screen.getByText('Body Warmup')).toBeInTheDocument()
  })
})
