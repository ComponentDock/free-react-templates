import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Results } from './Results'

describe('Results', () => {
  it('renders the badge, heading, sub, and two comparison sliders', () => {
    render(<Results />)
    expect(screen.getByText('Editing')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Edit Makes the Shot' })).toBeInTheDocument()
    expect(screen.getByText(/drag the handle/i)).toBeInTheDocument()

    expect(
      screen.getByRole('slider', { name: 'Portrait Retouching comparison' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('slider', { name: 'Landscape Color Grading comparison' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Portrait Retouching')).toBeInTheDocument()
    expect(screen.getByText('Landscape Color Grading')).toBeInTheDocument()

    expect(screen.getAllByText('Before')).toHaveLength(2)
    expect(screen.getAllByText('After')).toHaveLength(2)
  })
})
