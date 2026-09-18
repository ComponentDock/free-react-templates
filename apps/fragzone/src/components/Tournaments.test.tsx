import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tournaments } from './Tournaments'

describe('Tournaments', () => {
  it('renders tournament badge', () => {
    render(<Tournaments />)
    expect(screen.getByText('Tournaments')).toBeInTheDocument()
  })

  it('renders 2 tournament cards', () => {
    render(<Tournaments />)
    expect(screen.getByText('Cyber Nexus Championship')).toBeInTheDocument()
    expect(screen.getByText('Shadow Realms Arena')).toBeInTheDocument()
  })

  it('renders tournament details', () => {
    render(<Tournaments />)
    expect(screen.getByText('June 20, 2025')).toBeInTheDocument()
    expect(screen.getByText('July 01, 2025')).toBeInTheDocument()
    expect(screen.getByText('10 teams')).toBeInTheDocument()
    expect(screen.getAllByText('Fragzone Admin')).toHaveLength(2)
    expect(screen.getByText(/1st \$2,000/)).toBeInTheDocument()
  })

  it('renders premium tournament badges', () => {
    render(<Tournaments />)
    const badges = screen.getAllByText('Premium Tournament')
    expect(badges).toHaveLength(2)
  })
})
