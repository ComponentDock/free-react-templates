import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Birthday Catering')).toBeInTheDocument()
    expect(screen.getByText('Wedding Service')).toBeInTheDocument()
    expect(screen.getByText('Party Catering')).toBeInTheDocument()
    expect(screen.getByText('Event Catering')).toBeInTheDocument()
    expect(screen.getByText('Corporate Service')).toBeInTheDocument()
    expect(screen.getByText('Catering On Demand')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/lorem ipsum dolor sit amet/i)
    expect(descriptions.length).toBe(6)
  })
})
