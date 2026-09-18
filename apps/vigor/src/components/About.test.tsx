import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders welcome heading', () => {
    render(<About />)
    expect(screen.getByText(/Welcome to/)).toBeDefined()
    expect(screen.getByText(/Vigor/)).toBeDefined()
    expect(screen.getByText(/Crossfit Gym/)).toBeDefined()
  })

  it('renders welcome subheading', () => {
    render(<About />)
    expect(screen.getByText('Welcome')).toBeDefined()
  })

  it('renders join us button', () => {
    render(<About />)
    expect(screen.getByText('Join us')).toBeDefined()
  })

  it('renders video play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeDefined()
  })

  it('renders about section with id', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeDefined()
  })
})
