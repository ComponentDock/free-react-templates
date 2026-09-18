import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Complete solution of large projects/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/end-to-end construction solutions/i)).toBeInTheDocument()
    expect(screen.getByText(/decades of experience/i)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /Construction workers/i })).toBeInTheDocument()
  })

  it('has the about section landmark', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: /About/i })).toBeInTheDocument()
  })
})
