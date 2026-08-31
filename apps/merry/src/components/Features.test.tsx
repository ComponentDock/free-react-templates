import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: /built for performance/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Features />)
    expect(screen.getByText(/everything you need/i)).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Multi-Item Display')).toBeInTheDocument()
    expect(screen.getByText('Smooth Transitions')).toBeInTheDocument()
    expect(screen.getByText('Accessible by Default')).toBeInTheDocument()
    expect(screen.getByText('Community Driven')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Showcase multiple carousel items/i)).toBeInTheDocument()
    expect(screen.getByText(/Buttery-smooth CSS transitions/i)).toBeInTheDocument()
    expect(screen.getByText(/Full keyboard navigation/i)).toBeInTheDocument()
    expect(screen.getByText(/Open-source templates/i)).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    const { container } = render(<Features />)
    expect(container.querySelector('#features')).toBeInTheDocument()
  })
})
