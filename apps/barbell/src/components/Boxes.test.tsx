import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Boxes } from './Boxes'

describe('Boxes', () => {
  it('shows the three giant photo labels', () => {
    render(<Boxes />)
    expect(screen.getByRole('heading', { level: 1, name: 'Crossfit' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'WOD' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Kids & Teens' })).toBeInTheDocument()
  })

  it('renders three photos', () => {
    const { container } = render(<Boxes />)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
