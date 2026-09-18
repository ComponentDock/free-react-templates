import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesCards } from './ServicesCards'

describe('ServicesCards', () => {
  it('renders 3 service cards', () => {
    render(<ServicesCards />)
    expect(screen.getByText('Vector Artworks')).toBeInTheDocument()
    expect(screen.getByText('Corporate Identity')).toBeInTheDocument()
    expect(screen.getByText('Art Direction Design')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<ServicesCards />)
    const descriptions = screen.getAllByText(/Lorem ipsum/)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })
})
