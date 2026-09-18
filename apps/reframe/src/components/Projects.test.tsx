import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Recent Projects')).toBeInTheDocument()
  })

  it('renders 3 project cards', () => {
    render(<Projects />)
    expect(screen.getByText('House Renovation')).toBeInTheDocument()
    expect(screen.getByText('General Construction Building')).toBeInTheDocument()
    expect(screen.getByText('Pre-Construction')).toBeInTheDocument()
  })

  it('renders project images with alt text', () => {
    render(<Projects />)
    expect(screen.getByAltText('House Renovation')).toBeInTheDocument()
    expect(screen.getByAltText('General Construction Building')).toBeInTheDocument()
    expect(screen.getByAltText('Pre-Construction')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<Projects className="extra" />)
    expect(screen.getByTestId('projects').className).toContain('extra')
  })
})
