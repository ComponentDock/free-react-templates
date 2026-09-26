import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Fashion Photography')).toBeInTheDocument()
    expect(screen.getByText('Nature Photography')).toBeInTheDocument()
    expect(screen.getByText('Event Coverage')).toBeInTheDocument()
    expect(screen.getByText('Property Tours')).toBeInTheDocument()
    expect(screen.getByText('Multimedia Services')).toBeInTheDocument()
    expect(screen.getByText('Wedding Photography')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/An so vulgar to on points wanted/)
    expect(descriptions.length).toBe(6)
  })
})
