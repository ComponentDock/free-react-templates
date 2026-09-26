import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByText('Here are some of my expertise')).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Innovative Ideas')).toBeInTheDocument()
    expect(screen.getByText('Software')).toBeInTheDocument()
    expect(screen.getByText('Application')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Backend Development')).toBeInTheDocument()
    expect(screen.getByText('Data Engineering')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Creative solutions/)).toBeInTheDocument()
  })
})
