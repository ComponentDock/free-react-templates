import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /what we offer/i })).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText(/residential real estate photography/i)).toBeInTheDocument()
    expect(screen.getByText(/commercial real estate photography/i)).toBeInTheDocument()
    expect(screen.getByText(/construction site monitoring/i)).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })
})
