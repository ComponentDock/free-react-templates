import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /for the next great business/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/quo tempora cumque eligendi/i)).toBeInTheDocument()
  })

  it('renders all four feature bullets', () => {
    render(<About />)
    expect(screen.getByText(/officia quaerat eaque neque/i)).toBeInTheDocument()
    expect(screen.getByText(/possimus aut consequuntur/i)).toBeInTheDocument()
    const loremElements = screen.getAllByText(/lorem ipsum dolor sit amet$/i)
    expect(loremElements.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/consectetur adipisicing elit$/i)).toBeInTheDocument()
  })
})
