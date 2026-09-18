import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and Learn More button', () => {
    render(<About />)
    expect(screen.getByText('We Properly Understand Your Purpose')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('displays descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Multiply replenish sea/)).toBeInTheDocument()
  })
})
