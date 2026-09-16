import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('displays all four statistics', () => {
    render(<StatsCounter />)
    expect(screen.getByText('35')).toBeInTheDocument()
    expect(screen.getByText('1526')).toBeInTheDocument()
    expect(screen.getByText('720')).toBeInTheDocument()
    expect(screen.getByText('680')).toBeInTheDocument()
  })

  it('displays all four labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Dedicated Lawyers')).toBeInTheDocument()
    expect(screen.getByText('Successful Cases')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Clients')).toBeInTheDocument()
    expect(screen.getByText('Personal Cases')).toBeInTheDocument()
  })
})
