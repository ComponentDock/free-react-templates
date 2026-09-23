import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders all four statistics', () => {
    render(<StatsCounter />)
    expect(screen.getByText('90+')).toBeInTheDocument()
    expect(screen.getByText('45+')).toBeInTheDocument()
    expect(screen.getByText('19+')).toBeInTheDocument()
    expect(screen.getByText('26+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Court Won')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()
    expect(screen.getByText('Practice Years')).toBeInTheDocument()
  })

  it('renders background image', () => {
    const { container } = render(<StatsCounter />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/docket-stats/1920/400')
  })
})
