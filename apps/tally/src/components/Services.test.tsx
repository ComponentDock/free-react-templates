import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/our services/i)
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Accounting')).toBeInTheDocument()
    expect(screen.getByText(/Tax.*Compliance.*Payroll/)).toBeInTheDocument()
    expect(screen.getByText('Financial Services')).toBeInTheDocument()
    expect(screen.getByText('Growth & Funding Access')).toBeInTheDocument()
  })

  it('renders icons for each service', () => {
    render(<Services />)
    const icons = document.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(4)
  })

  it('has a 4-column grid layout', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: /services/i })
    expect(section).toBeInTheDocument()
  })
})
