import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Opportunities } from './Opportunities'

describe('Opportunities', () => {
  it('renders two opportunity cards', () => {
    render(<Opportunities />)
    expect(screen.getByText('Join Our Community')).toBeInTheDocument()
    expect(screen.getByText('Volunteer With Us')).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<Opportunities />)
    expect(screen.getByText(/fulfilling lifestyle/)).toBeInTheDocument()
    expect(screen.getByText(/meaningful volunteer/)).toBeInTheDocument()
  })

  it('renders Learn More buttons', () => {
    render(<Opportunities />)
    const buttons = screen.getAllByText('Learn More')
    expect(buttons).toHaveLength(2)
  })
})
