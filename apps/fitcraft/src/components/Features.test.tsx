import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section title', () => {
    render(<Features />)
    expect(screen.getByText(/push your limits forward/i)).toBeInTheDocument()
  })

  it('renders the subtitle label', () => {
    render(<Features />)
    expect(screen.getByText(/why choose us/i)).toBeInTheDocument()
  })

  it('renders all 4 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Quality Equipment')).toBeInTheDocument()
    expect(screen.getByText('Health Caring')).toBeInTheDocument()
    expect(screen.getByText('Flexible Hours')).toBeInTheDocument()
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/premium-grade machines/i)).toBeInTheDocument()
    expect(screen.getByText(/comprehensive wellness programs/i)).toBeInTheDocument()
  })

  it('renders the Explore Classes button', () => {
    render(<Features />)
    expect(screen.getByText('Explore Classes')).toBeInTheDocument()
  })

  it('has the about section id', () => {
    const { container } = render(<Features />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })
})
