import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the bio paragraph and three stats with values and labels', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: /about/i })).toBeInTheDocument()
    expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument()

    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('Projects completed')).toBeInTheDocument()
    expect(screen.getByText('80+')).toBeInTheDocument()
    expect(screen.getByText('Happy clients')).toBeInTheDocument()
  })
})
