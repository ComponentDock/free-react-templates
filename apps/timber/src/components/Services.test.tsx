import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What I do\?/i })).toBeInTheDocument()
  })

  it('renders four service cards', () => {
    render(<Services />)
    const titles = [
      'General Contracting',
      'Pre-Construction Design',
      'Building & Modeling',
      'Construction Management',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Comprehensive construction management/)).toBeInTheDocument()
    expect(screen.getByText(/Thorough planning and design/)).toBeInTheDocument()
  })
})
