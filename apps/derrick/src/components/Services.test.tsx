import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Your Main Features & Benefits')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Construction Management')).toBeInTheDocument()
    expect(screen.getByText('Pre-Construction Services')).toBeInTheDocument()
    expect(screen.getByText('Construction Services')).toBeInTheDocument()
    expect(screen.getByText('General Constructing')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Expert oversight/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive planning/)).toBeInTheDocument()
  })

  it('has the services section id', () => {
    render(<Services />)
    expect(document.getElementById('services')).toBeInTheDocument()
  })
})
