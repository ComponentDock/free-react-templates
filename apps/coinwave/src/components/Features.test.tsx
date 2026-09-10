import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { describe, expect, it } from 'vitest'

describe('Features', () => {
  it('displays the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Why choose us during purchase bitcoin')).toBeInTheDocument()
  })

  it('renders all 6 feature items', () => {
    render(<Features />)
    expect(screen.getByText('Expert Technicians')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getByText('Highly Recomended')).toBeInTheDocument()
    expect(screen.getByText('Positive Reviews')).toBeInTheDocument()
  })

  it('displays descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/blockchain experts/)).toBeInTheDocument()
    expect(screen.getByText(/Dedicated support/)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 customer support/)).toBeInTheDocument()
    expect(screen.getByText(/Cutting-edge technology/)).toBeInTheDocument()
    expect(screen.getByText(/Trusted by over 100,000/)).toBeInTheDocument()
    expect(screen.getByText(/Consistently rated 5 stars/)).toBeInTheDocument()
  })
})
