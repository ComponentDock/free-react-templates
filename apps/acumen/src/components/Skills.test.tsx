import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByText('Our Skills')).toBeInTheDocument()
  })

  it('shows all skill names', () => {
    render(<Skills />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Coding')).toBeInTheDocument()
    expect(screen.getByText('Developing')).toBeInTheDocument()
    expect(screen.getByText('Java Script')).toBeInTheDocument()
    expect(screen.getByText('Apps Design')).toBeInTheDocument()
    expect(screen.getByText('Graphics')).toBeInTheDocument()
  })

  it('has 6 progress bars with correct aria attributes', () => {
    render(<Skills />)
    const bars = screen.getAllByRole('progressbar')
    expect(bars.length).toBe(6)
    expect(bars[0]).toHaveAttribute('aria-valuenow', '95')
    expect(bars[0]).toHaveAttribute('aria-valuemin', '0')
    expect(bars[0]).toHaveAttribute('aria-valuemax', '100')
    expect(bars[1]).toHaveAttribute('aria-valuenow', '85')
  })
})
