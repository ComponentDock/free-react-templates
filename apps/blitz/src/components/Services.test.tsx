import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByText('We take care of your business')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Services />)
    expect(screen.getByText('Explore our services')).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<Services />)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards.length).toBeGreaterThanOrEqual(5)
  })

  it('renders service names', () => {
    render(<Services />)
    expect(screen.getAllByText('Amazing service').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Management')).toBeInTheDocument()
    expect(screen.getByText('Risk Evaluation')).toBeInTheDocument()
    expect(screen.getByText('Assessment')).toBeInTheDocument()
  })

  it('renders discover more links on service cards', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /discover more/i })
    expect(links.length).toBeGreaterThanOrEqual(5)
  })
})
