import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Achievements } from './Achievements'

describe('Achievements', () => {
  it('renders all four stat cards', () => {
    render(<Achievements />)
    expect(screen.getByText('99.55%')).toBeInTheDocument()
    expect(screen.getByText('98,000+')).toBeInTheDocument()
    expect(screen.getByText('99.99%')).toBeInTheDocument()
    expect(screen.getByText('1M+')).toBeInTheDocument()
  })

  it('renders stat titles', () => {
    render(<Achievements />)
    expect(screen.getByText('Ratings 4.9 from Users')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Server Uptime')).toBeInTheDocument()
    expect(screen.getByText('Loved by Customers')).toBeInTheDocument()
  })
})
