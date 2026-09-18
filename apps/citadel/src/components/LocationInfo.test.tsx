import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LocationInfo } from './LocationInfo'

describe('LocationInfo', () => {
  it('renders the Our Location card', () => {
    render(<LocationInfo />)
    expect(screen.getByText('Our Location')).toBeInTheDocument()
  })

  it('renders the Opening Hours card', () => {
    render(<LocationInfo />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
  })

  it('renders the Drop a Message card', () => {
    render(<LocationInfo />)
    expect(screen.getByText('Drop a Message')).toBeInTheDocument()
  })

  it('renders location address lines', () => {
    render(<LocationInfo />)
    expect(screen.getByText('127 Manchester City, London')).toBeInTheDocument()
  })

  it('renders opening hours lines', () => {
    render(<LocationInfo />)
    expect(screen.getByText(/Mon–Fri/)).toBeInTheDocument()
    expect(screen.getByText(/Sat–Sun/)).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<LocationInfo />)
    expect(screen.getByText('support@citadel.com')).toBeInTheDocument()
    expect(screen.getByText('456-267-3572')).toBeInTheDocument()
  })

  it('renders Get Direction link', () => {
    render(<LocationInfo />)
    expect(screen.getByText('Get Direction')).toBeInTheDocument()
  })

  it('renders Mail Us link', () => {
    render(<LocationInfo />)
    expect(screen.getByText('Mail Us')).toBeInTheDocument()
  })
})
