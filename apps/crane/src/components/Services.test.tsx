import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Maintenance & Repair')).toBeInTheDocument()
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Bridge & Road Construction')).toBeInTheDocument()
  })

  it('renders More links for each service', () => {
    render(<Services />)
    const moreLinks = screen.getAllByText('More')
    expect(moreLinks.length).toBe(3)
  })
})
