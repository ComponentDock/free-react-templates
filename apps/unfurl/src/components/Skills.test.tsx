import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'

describe('Skills', () => {
  it('renders the skills heading', () => {
    render(<Skills />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders all 4 skill bars with labels and percentages', () => {
    render(<Skills />)

    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()

    expect(screen.getByText('HTML/CSS')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()

    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()

    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
  })

  it('renders progress bars with correct widths', () => {
    render(<Skills />)

    // Check the style attribute on the inner div
    const progressBars = document.querySelectorAll('[style*="width"]')
    expect(progressBars.length).toBe(4)
  })
})
