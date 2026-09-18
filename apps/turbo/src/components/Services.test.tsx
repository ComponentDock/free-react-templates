import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /business consulting/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /market analysis/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /user monitoring/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /insurance consulting/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /financial investment/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /financial management/i })).toBeInTheDocument()
  })

  it('renders Learn More links for each service', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /learn more/i })
    expect(links).toHaveLength(6)
  })
})
