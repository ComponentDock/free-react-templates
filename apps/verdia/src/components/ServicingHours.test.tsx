import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicingHours } from './ServicingHours'

describe('ServicingHours', () => {
  it('renders heading', () => {
    render(<ServicingHours />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Servicing Hours')
  })

  it('renders all schedule items', () => {
    render(<ServicingHours />)
    expect(screen.getByText(/Monday - Friday/)).toBeInTheDocument()
    expect(screen.getByText(/Saturday/)).toBeInTheDocument()
    expect(screen.getByText(/Sunday/)).toBeInTheDocument()
  })
})
