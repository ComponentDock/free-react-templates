import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('shows the four stat values with labels', () => {
    render(<Counters />)

    expect(screen.getByText('8705')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('480')).toBeInTheDocument()
    expect(screen.getByText('Active Clients')).toBeInTheDocument()
    expect(screen.getByText('626')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('9774')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('highlights the Active Clients box on the red brand background', () => {
    render(<Counters />)

    const box = screen.getByText('Active Clients').parentElement
    expect(box).toHaveClass('bg-accent', 'text-white')
    expect(screen.getByText('Projects Completed').parentElement).not.toHaveClass('bg-accent')
  })
})
