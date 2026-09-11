import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Services we provide/i })).toBeInTheDocument()
  })

  it('renders the Get Free Quote button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /Get Free Quote/i })).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'General Contracting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Project Planning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Interior Design' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/manage all aspects/i)).toBeInTheDocument()
    expect(screen.getByText(/comprehensive project plans/i)).toBeInTheDocument()
    expect(screen.getByText(/Transform your spaces/i)).toBeInTheDocument()
  })

  it('has the services section landmark', () => {
    render(<Services />)
    expect(screen.getByRole('region', { name: /Services/i })).toBeInTheDocument()
  })
})
