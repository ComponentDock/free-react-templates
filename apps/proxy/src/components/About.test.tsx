import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the About Me heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('About Me')
  })

  it('renders the agent bio text', () => {
    render(<About />)
    expect(screen.getByText(/dedicated real estate agent with over a decade/)).toBeInTheDocument()
  })

  it('renders the agent name', () => {
    render(<About />)
    expect(screen.getByText('— John Doe')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about the agent/i })
    expect(img).toHaveAttribute('alt', 'About the agent')
  })
})
