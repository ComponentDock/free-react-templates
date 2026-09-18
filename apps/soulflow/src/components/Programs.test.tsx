import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders the section heading', () => {
    render(<Programs />)
    expect(screen.getByText('Our Programs')).toBeInTheDocument()
  })

  it('renders all 6 program cards', () => {
    render(<Programs />)
    expect(screen.getByText('Embrace Your Edge')).toBeInTheDocument()
    expect(screen.getByText('Yoga to Build Resilience')).toBeInTheDocument()
    expect(screen.getByText('Rise & Shine')).toBeInTheDocument()
    expect(screen.getByText('Bend & Stretch')).toBeInTheDocument()
    expect(screen.getByText('Vinyasa Yoga')).toBeInTheDocument()
    expect(screen.getByText('Barre Workout')).toBeInTheDocument()
  })

  it('displays instructor names', () => {
    render(<Programs />)
    expect(screen.getByText('Vicky Johnson')).toBeInTheDocument()
    expect(screen.getByText('Kit Rich')).toBeInTheDocument()
    expect(screen.getByText('Sara Clark')).toBeInTheDocument()
  })
})
