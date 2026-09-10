import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceArea } from './ServiceArea'

describe('ServiceArea', () => {
  it('renders the Our Service heading', () => {
    render(<ServiceArea />)
    expect(screen.getByRole('heading', { name: 'Our Service' })).toBeInTheDocument()
  })

  it('renders the Why Choose Us section', () => {
    render(<ServiceArea />)
    expect(screen.getByRole('heading', { name: 'Why Choose Us?' })).toBeInTheDocument()
  })

  it('renders 4 service cards', () => {
    render(<ServiceArea />)
    expect(screen.getByRole('heading', { name: 'Ware House' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Road Freight' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sea Freight' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Air Freight' })).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<ServiceArea />)
    const learnMoreLinks = screen.getAllByRole('link', { name: 'Learn More' })
    expect(learnMoreLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Read More links on service cards', () => {
    render(<ServiceArea />)
    const readMoreLinks = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMoreLinks.length).toBeGreaterThanOrEqual(4)
  })
})
