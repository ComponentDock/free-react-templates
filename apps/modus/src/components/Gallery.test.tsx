import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /Our Work/i })).toBeInTheDocument()
  })

  it('renders three project cards', () => {
    render(<Gallery />)
    expect(screen.getByText('Residential Design')).toBeInTheDocument()
    expect(screen.getByText('Commercial Spaces')).toBeInTheDocument()
    expect(screen.getByText('Hospitality Interiors')).toBeInTheDocument()
  })

  it('renders the More Work CTA', () => {
    render(<Gallery />)
    expect(screen.getByRole('link', { name: /More Work/i })).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
