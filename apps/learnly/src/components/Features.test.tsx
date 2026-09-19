import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Why Learnly Works')).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Personalize Learning')).toBeInTheDocument()
    expect(screen.getByText('Trusted Courses')).toBeInTheDocument()
    expect(screen.getByText('Tools for Students')).toBeInTheDocument()
  })

  it('renders Learn More buttons for each feature', () => {
    render(<Features />)
    const buttons = screen.getAllByText('Learn More')
    expect(buttons).toHaveLength(3)
  })

  it('renders feature icons', () => {
    const { container } = render(<Features />)
    expect(container.querySelector('svg.lucide-graduation-cap')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-book-open')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-library')).toBeInTheDocument()
  })
})
