import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the Skills heading', () => {
    render(<Skills />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders all skill bars', () => {
    render(<Skills />)
    expect(screen.getByText('Photoshop')).toBeInTheDocument()
    expect(screen.getByText('jQuery')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('CSS3')).toBeInTheDocument()
  })

  it('shows correct percentages', () => {
    render(<Skills />)
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
  })

  it('has accessible progress bars', () => {
    render(<Skills />)
    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(4)
    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '75')
  })
})
