import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsSection } from './StatsSection'

describe('StatsSection', () => {
  it('renders all stat values', () => {
    render(<StatsSection />)
    expect(screen.getByText('1200')).toBeInTheDocument()
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<StatsSection />)
    expect(screen.getByText('Projects Done')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
