import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /our works/i })).toBeInTheDocument()
  })

  it('renders all six portfolio items', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /work 01/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /work 06/i })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders project tags', () => {
    render(<Portfolio />)
    expect(screen.getByText(/Illustration, Logo/i)).toBeInTheDocument()
  })
})
