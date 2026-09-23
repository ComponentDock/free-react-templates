import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroCards } from './IntroCards'

describe('IntroCards', () => {
  it('renders all four intro cards', () => {
    render(<IntroCards />)
    expect(screen.getAllByText('Expert Attorneys').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Case Dismissed')).toBeInTheDocument()
    // Court Performance appears twice (as per spec)
    const courtPerformances = screen.getAllByText('Court Performance')
    expect(courtPerformances).toHaveLength(2)
  })

  it('renders card descriptions', () => {
    render(<IntroCards />)
    expect(screen.getByText(/decades of combined experience/)).toBeInTheDocument()
    expect(screen.getByText(/proven track record/)).toBeInTheDocument()
    expect(screen.getByText(/perform brilliantly in court/)).toBeInTheDocument()
    expect(screen.getByText(/outstanding courtroom strategies/)).toBeInTheDocument()
  })
})
