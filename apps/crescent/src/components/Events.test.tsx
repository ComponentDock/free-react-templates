import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders heading', () => {
    render(<Events />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders 3 event cards', () => {
    render(<Events />)
    expect(screen.getByText('Seeing and Savoring Jesus Christ')).toBeInTheDocument()
    expect(screen.getByText('A God-Entranced Vision of All Things')).toBeInTheDocument()
    expect(screen.getByText('Speaker Interviews with J. Doe')).toBeInTheDocument()
  })

  it('renders event metadata', () => {
    render(<Events />)
    expect(screen.getByText('March 01, 2025')).toBeInTheDocument()
    expect(screen.getByText('09:00 - 11:00')).toBeInTheDocument()
    expect(screen.getByText('11 Rose St, Brooklyn, NY')).toBeInTheDocument()
  })

  it('renders Find Out More buttons', () => {
    render(<Events />)
    const btns = screen.getAllByText('Find Out More')
    expect(btns).toHaveLength(3)
  })

  it('has data-testid', () => {
    render(<Events />)
    expect(screen.getByTestId('events')).toBeInTheDocument()
  })
})
