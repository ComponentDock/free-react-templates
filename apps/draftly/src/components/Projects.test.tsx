import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders heading', () => {
    render(<Projects />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
  })

  it('renders all eight project cards', () => {
    render(<Projects />)
    const images = screen.getAllByAltText('Branding & Illustration Design')
    expect(images).toHaveLength(8)
  })

  it('renders Portfolio subheading', () => {
    render(<Projects />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
