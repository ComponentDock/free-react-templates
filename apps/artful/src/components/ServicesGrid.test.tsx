import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders the section heading', () => {
    render(<ServicesGrid />)
    expect(screen.getByRole('heading', { name: /Our Best Services/i })).toBeInTheDocument()
  })

  it('renders four service cards with titles', () => {
    render(<ServicesGrid />)
    expect(screen.getByRole('heading', { name: /Vector Illustration/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Graphic Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Web Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Photography/i })).toBeInTheDocument()
  })
})
