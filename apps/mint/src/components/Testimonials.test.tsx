import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and client quotes', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Cloe Marena/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Nathalie Channie/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Will Turner/i })).toBeInTheDocument()
  })
})
