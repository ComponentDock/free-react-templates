import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and all service cards', () => {
    render(<Services />)
    expect(screen.getByText('Offerings to My Clients')).toBeInTheDocument()
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Concept Design')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Creating innovative architectural designs/)).toBeInTheDocument()
    expect(screen.getByText(/Transforming interiors/)).toBeInTheDocument()
    expect(screen.getByText(/Developing creative concepts/)).toBeInTheDocument()
  })
})
