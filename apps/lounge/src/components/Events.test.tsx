import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders section heading', () => {
    render(<Events />)
    expect(screen.getByText('Join Event')).toBeInTheDocument()
    expect(screen.getByText('Our Events')).toBeInTheDocument()
  })

  it('renders event items', () => {
    render(<Events />)
    expect(screen.getByText('Summer Beach Gala')).toBeInTheDocument()
    expect(screen.getByText('Sunset Wine Tasting')).toBeInTheDocument()
  })

  it('renders event action buttons', () => {
    render(<Events />)
    const joinButtons = screen.getAllByText('Join event')
    expect(joinButtons).toHaveLength(2)
    const detailButtons = screen.getAllByText('See details')
    expect(detailButtons).toHaveLength(2)
  })
})
