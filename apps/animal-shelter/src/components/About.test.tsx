import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the two-column about section with heading, tagline, and details button', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Globally Connected by Large Network')
    expect(screen.getByText(/listen from you/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'get details' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'About the shelter' })).toBeInTheDocument()
  })
})
