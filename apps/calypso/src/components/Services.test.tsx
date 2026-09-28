import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section', () => {
    render(<Services />)
    expect(screen.getByTestId('services')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('My Services')).toBeInTheDocument()
    expect(screen.getByText('What I Do')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Strategy')).toBeInTheDocument()
    expect(screen.getByText('UX Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Data-driven product strategy/)).toBeInTheDocument()
    expect(screen.getByText(/User research, wireframing/)).toBeInTheDocument()
    expect(screen.getByText(/Full-stack development/)).toBeInTheDocument()
    expect(screen.getByText(/Brand positioning/)).toBeInTheDocument()
  })
})
