import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Portrait Photography')).toBeInTheDocument()
    expect(screen.getByText('Landscape Photography')).toBeInTheDocument()
    expect(screen.getByText('Event Photography')).toBeInTheDocument()
    expect(screen.getByText('Product Photography')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Lorem ipsum dolor/)
    expect(descriptions.length).toBe(4)
  })
})
