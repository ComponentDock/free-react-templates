import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LogosStrip } from './LogosStrip'

describe('LogosStrip', () => {
  it('renders the As seen on heading', () => {
    render(<LogosStrip />)
    expect(screen.getByText('As seen on')).toBeInTheDocument()
  })

  it('renders 5 press logos', () => {
    render(<LogosStrip />)
    expect(screen.getByText('TechCrunch')).toBeInTheDocument()
    expect(screen.getByText('Forbes')).toBeInTheDocument()
    expect(screen.getByText('Bloomberg')).toBeInTheDocument()
    expect(screen.getByText('Wired')).toBeInTheDocument()
    expect(screen.getByText('VentureBeat')).toBeInTheDocument()
  })
})
