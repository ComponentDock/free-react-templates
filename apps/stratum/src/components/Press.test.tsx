import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Press } from './Press'

describe('Press', () => {
  it('renders Press heading', () => {
    render(<Press />)
    expect(screen.getByText('Press')).toBeInTheDocument()
  })

  it('renders all 3 press articles', () => {
    render(<Press />)
    expect(screen.getByText('How To Find Gold In Mining')).toBeInTheDocument()
    expect(screen.getByText('Surface Mining Innovations')).toBeInTheDocument()
    expect(screen.getByText('Environmental Compliance in Mining')).toBeInTheDocument()
  })

  it('renders article dates', () => {
    render(<Press />)
    expect(screen.getByText('Apr 19, 2025')).toBeInTheDocument()
    expect(screen.getByText('Mar 12, 2025')).toBeInTheDocument()
    expect(screen.getByText('Feb 08, 2025')).toBeInTheDocument()
  })

  it('renders article descriptions', () => {
    render(<Press />)
    expect(screen.getByText(/A comprehensive guide/)).toBeInTheDocument()
  })
})
