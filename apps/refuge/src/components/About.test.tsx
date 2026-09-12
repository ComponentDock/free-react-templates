import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByText('We Are Trusted Agency Company')).toBeInTheDocument()
  })

  it('renders descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/With over a decade of experience/)).toBeInTheDocument()
    expect(screen.getByText(/From home and auto insurance/)).toBeInTheDocument()
  })
})
