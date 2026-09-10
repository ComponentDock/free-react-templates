import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the Welcome heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Welcome/i })).toBeInTheDocument()
  })

  it('renders descriptive paragraph', () => {
    render(<About />)
    expect(screen.getByText(/passionate team dedicated/i)).toBeInTheDocument()
  })

  it('renders four feature badges', () => {
    render(<About />)
    const badges = ['Passionate', 'Honest', 'Dependable', 'Always Improving']
    for (const label of badges) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
