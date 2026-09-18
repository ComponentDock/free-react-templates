import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section title', () => {
    render(<Projects />)
    expect(screen.getByText('Some Projects')).toBeInTheDocument()
  })

  it('renders all project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Vector Illustration')).toBeInTheDocument()
    expect(screen.getByText('Digital Branding')).toBeInTheDocument()
    expect(screen.getByText('Web Experience')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    expect(screen.getByAltText('Vector Illustration')).toBeInTheDocument()
    expect(screen.getByAltText('Digital Branding')).toBeInTheDocument()
    expect(screen.getByAltText('Web Experience')).toBeInTheDocument()
  })

  it('has dark purple background', () => {
    render(<Projects />)
    const section = screen.getByText('Some Projects').closest('section')!
    expect(section).toHaveClass('bg-brand')
  })
})
