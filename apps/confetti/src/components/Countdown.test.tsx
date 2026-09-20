import { render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  it('renders all countdown units', () => {
    render(<Countdown />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hrs')).toBeInTheDocument()
    expect(screen.getByText('Min')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('renders countdown values', () => {
    render(<Countdown />)
    expect(screen.getByText('96')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })
})
