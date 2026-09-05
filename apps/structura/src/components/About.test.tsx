import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Welcome to Interior/i })).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /We Are The Leader In The Architectural/i }),
    ).toBeInTheDocument()
  })

  it('displays stats', () => {
    render(<About />)
    expect(screen.getByText('35')).toBeInTheDocument()
    expect(screen.getByText('78')).toBeInTheDocument()
    expect(screen.getByText('Experience Years')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
  })
})
