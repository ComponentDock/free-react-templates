import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and all four project cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /featured work/i })).toBeInTheDocument()
    for (const title of [
      'E-commerce Platform',
      'Design System',
      'Analytics Dashboard',
      'Mobile Fitness App',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders a blurb for every project', () => {
    render(<Projects />)
    expect(screen.getByText(/real-time inventory/i)).toBeInTheDocument()
    expect(screen.getByText(/token-driven component library/i)).toBeInTheDocument()
    expect(screen.getByText(/streaming data, drill-down reports/i)).toBeInTheDocument()
    expect(screen.getByText(/cross-platform fitness companion/i)).toBeInTheDocument()
  })
})
