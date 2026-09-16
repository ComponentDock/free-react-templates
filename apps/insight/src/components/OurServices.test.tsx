import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OurServices } from './OurServices'

describe('OurServices', () => {
  it('renders heading and 3 service cards', () => {
    render(<OurServices />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Strategic Planning')).toBeInTheDocument()
    expect(screen.getByText('Trades & Stocks')).toBeInTheDocument()
    expect(screen.getByText('Audit & Assurance')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<OurServices />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(3)
  })

  it('renders More Services button', () => {
    render(<OurServices />)
    expect(screen.getByText('More Services')).toBeInTheDocument()
  })
})
