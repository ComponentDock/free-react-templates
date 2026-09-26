import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('Who Am I?')).toBeInTheDocument()
  })

  it('renders bio paragraph', () => {
    render(<About />)
    expect(screen.getByText(/passionate UI\/UX designer/)).toBeInTheDocument()
  })

  it('renders 4 stat cards', () => {
    render(<About />)
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Software')).toBeInTheDocument()
    expect(screen.getByText('Application')).toBeInTheDocument()
  })

  it('renders stat counts', () => {
    render(<About />)
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('32')).toBeInTheDocument()
    expect(screen.getByText('28')).toBeInTheDocument()
    expect(screen.getByText('18')).toBeInTheDocument()
  })

  it('renders Hire me button', () => {
    render(<About />)
    expect(screen.getByText('Hire me')).toBeInTheDocument()
  })
})
