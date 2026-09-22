import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders all four service cards', () => {
    render(<ServicesGrid />)
    expect(screen.getByText('Special Rooms')).toBeInTheDocument()
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Suites & Rooms')).toBeInTheDocument()
  })

  it('has an arrow CTA on the last card', () => {
    render(<ServicesGrid />)
    const arrowBtn = screen.getByLabelText(/View Suites & Rooms/i)
    expect(arrowBtn).toBeInTheDocument()
  })
})
