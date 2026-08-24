import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('renders the section heading', () => {
    render(<Process />)
    expect(screen.getByRole('heading', { name: 'Our process' })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Process />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders all six process steps', () => {
    render(<Process />)
    expect(screen.getByText('Information Gathering')).toBeInTheDocument()
    expect(screen.getByText('Planning')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Testing and Delivery')).toBeInTheDocument()
    expect(screen.getByText('Maintenance')).toBeInTheDocument()
  })
})
