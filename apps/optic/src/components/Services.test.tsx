import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Wedding' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Conferences' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Culture' })).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Capturing the magic/)).toBeInTheDocument()
    expect(screen.getByText(/Professional event coverage/)).toBeInTheDocument()
    expect(screen.getByText(/Documenting conferences/)).toBeInTheDocument()
    expect(screen.getByText(/Exploring cultural narratives/)).toBeInTheDocument()
  })
})
