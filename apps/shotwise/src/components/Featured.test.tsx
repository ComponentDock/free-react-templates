import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Featured } from './Featured'

describe('Featured', () => {
  it('renders section heading', () => {
    render(<Featured />)
    expect(screen.getByText(/Reasons To/)).toBeInTheDocument()
    expect(screen.getByText('Choose')).toBeInTheDocument()
  })

  it('renders paragraph text', () => {
    render(<Featured />)
    expect(screen.getByText(/we focus on a range/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Featured />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders featured image', () => {
    render(<Featured />)
    expect(screen.getByAltText('Featured photography')).toBeInTheDocument()
  })
})
