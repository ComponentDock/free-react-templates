import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders the services title', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Physical Therapy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chiropractic Therapy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Massage Therapy' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Comprehensive physical therapy programs/)).toBeInTheDocument()
    expect(screen.getByText(/Spinal manipulation and musculoskeletal/)).toBeInTheDocument()
    expect(screen.getByText(/Therapeutic massage techniques/)).toBeInTheDocument()
  })

  it('has section id for navigation', () => {
    render(<Services />)
    expect(document.getElementById('services')).toBeInTheDocument()
  })
})
