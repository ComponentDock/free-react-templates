import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the My Skills heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /My Skills/i })).toBeInTheDocument()
  })

  it('displays all 6 skill progress bars', () => {
    render(<Skills />)
    expect(screen.getByText('Photoshop')).toBeInTheDocument()
    expect(screen.getByText('jQuery')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('CSS3')).toBeInTheDocument()
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('SEO')).toBeInTheDocument()
  })

  it('shows correct percentages', () => {
    render(<Skills />)
    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(6)
    expect(bars[0]).toHaveAttribute('aria-valuenow', '75')
    expect(bars[1]).toHaveAttribute('aria-valuenow', '60')
    expect(bars[2]).toHaveAttribute('aria-valuenow', '85')
    expect(bars[3]).toHaveAttribute('aria-valuenow', '90')
    expect(bars[4]).toHaveAttribute('aria-valuenow', '70')
    expect(bars[5]).toHaveAttribute('aria-valuenow', '80')
  })
})
