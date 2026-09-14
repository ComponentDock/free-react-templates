import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders exactly 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Advance Technology')).toBeInTheDocument()
    expect(screen.getByText('World Quality Service')).toBeInTheDocument()
    expect(screen.getByText('Competitive Pricing')).toBeInTheDocument()
    expect(screen.getByText('Lifetime Support')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    const paragraphs = screen.getAllByText(/All fish day af emale/)
    expect(paragraphs.length).toBe(4)
  })
})
