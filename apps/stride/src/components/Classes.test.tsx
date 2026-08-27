import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders the section heading', () => {
    render(<Classes />)
    expect(screen.getByText('Fitness Class')).toBeInTheDocument()
    expect(screen.getByText('Classes')).toBeInTheDocument()
  })

  it('renders all 10 class cards', () => {
    render(<Classes />)
    expect(screen.getByText('Yoga Basics')).toBeInTheDocument()
    expect(screen.getByText('Strength Training')).toBeInTheDocument()
    expect(screen.getByText('Cardio Blast')).toBeInTheDocument()
    expect(screen.getByText('Pilates Core')).toBeInTheDocument()
    expect(screen.getByText('HIIT Circuit')).toBeInTheDocument()
    expect(screen.getByText('Spin Cycle')).toBeInTheDocument()
    expect(screen.getByText('Boxing Basics')).toBeInTheDocument()
    expect(screen.getByText('Stretch & Flow')).toBeInTheDocument()
    expect(screen.getByText('Power Lift')).toBeInTheDocument()
    expect(screen.getByText('Aerobics')).toBeInTheDocument()
  })

  it('renders trainer names', () => {
    render(<Classes />)
    expect(screen.getByText('By Sarah Miller')).toBeInTheDocument()
    expect(screen.getByText('By Mike Johnson')).toBeInTheDocument()
  })

  it('renders duration info', () => {
    render(<Classes />)
    const durations = screen.getAllByText(/minutes/)
    expect(durations.length).toBeGreaterThanOrEqual(1)
  })
})
