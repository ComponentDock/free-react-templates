import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Projects we have Done/i })).toBeInTheDocument()
  })

  it('renders all three project cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Modern Office Complex' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Residential Tower' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Commercial Center' })).toBeInTheDocument()
  })

  it('renders View Project buttons', () => {
    render(<Projects />)
    const buttons = screen.getAllByRole('button', { name: /View Project/i })
    expect(buttons).toHaveLength(3)
  })

  it('renders project images', () => {
    render(<Projects />)
    expect(screen.getByRole('img', { name: 'Modern Office Complex' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Residential Tower' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Commercial Center' })).toBeInTheDocument()
  })

  it('has the projects section landmark', () => {
    render(<Projects />)
    expect(screen.getByRole('region', { name: /Projects/i })).toBeInTheDocument()
  })
})
