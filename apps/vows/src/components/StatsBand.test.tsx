import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsBand } from './StatsBand'

describe('StatsBand', () => {
  it('renders the four animated statistics', () => {
    render(<StatsBand />)

    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Weddings Planned')).toBeInTheDocument()
    expect(screen.getByText('12+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
    expect(screen.getByText('Happy Couples')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Venue Partners')).toBeInTheDocument()
  })
})
