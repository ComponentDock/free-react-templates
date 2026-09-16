import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsSection } from './StatsSection'

describe('StatsSection', () => {
  it('renders the heading', () => {
    render(<StatsSection />)
    expect(screen.getByText('Best Provider for Industrial Services')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<StatsSection />)
    expect(screen.getByText('Ironclad A Construction Company')).toBeInTheDocument()
  })

  it('renders the projects counter', () => {
    render(<StatsSection />)
    expect(screen.getByText('48,000')).toBeInTheDocument()
    expect(screen.getByText('Project Completed')).toBeInTheDocument()
  })

  it('renders the customers counter', () => {
    render(<StatsSection />)
    expect(screen.getByText('54,900')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })
})
