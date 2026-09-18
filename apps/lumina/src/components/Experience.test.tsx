import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders section title', () => {
    render(<Experience />)
    expect(screen.getByText('Beautiful Experiences')).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<Experience />)
    const texts = screen.getAllByText(/LCD screens are uniquely modern/)
    expect(texts.length).toBeGreaterThanOrEqual(2) // subtitle + content heading
  })

  it('renders experience images', () => {
    render(<Experience />)
    expect(screen.getByAltText('Experience 1')).toBeInTheDocument()
    expect(screen.getByAltText('Experience 2')).toBeInTheDocument()
  })

  it('renders content heading and description', () => {
    render(<Experience />)
    expect(screen.getByText('Vector Illustration')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
  })

  it('renders View Details CTA', () => {
    render(<Experience />)
    expect(screen.getByText('View Details')).toBeInTheDocument()
  })
})
