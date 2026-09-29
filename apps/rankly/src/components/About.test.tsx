import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Strategy Drives Growth/i })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByText('See Details')).toBeInTheDocument()
  })

  it('renders the chart placeholder', () => {
    render(<About />)
    expect(screen.getByText('Performance Metrics')).toBeInTheDocument()
  })
})
