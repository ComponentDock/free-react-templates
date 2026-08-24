import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Projects we have done.')
  })

  it('renders 3 project items with titles', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 3, name: 'Mobile App' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'E-Commerce Platform' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Corporate Website' })).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<Gallery />)
    expect(screen.getByText(/A sleek mobile application/)).toBeInTheDocument()
    expect(screen.getByText(/Full-featured online store/)).toBeInTheDocument()
    expect(screen.getByText(/Professional business site/)).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Gallery />)
    expect(screen.getByRole('img', { name: 'Mobile App' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'E-Commerce Platform' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Corporate Website' })).toBeInTheDocument()
  })
})
