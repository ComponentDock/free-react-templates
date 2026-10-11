import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExamplesBand } from './ExamplesBand'

describe('ExamplesBand', () => {
  it('renders the centered copy band', () => {
    const { container } = render(<ExamplesBand />)

    expect(container.querySelector('section')!.id).toBe('examples')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Completed with examples' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/three pre-built pages/)).toBeInTheDocument()
  })
})
