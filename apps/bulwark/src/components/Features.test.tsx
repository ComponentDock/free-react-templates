import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section title', () => {
    render(<Features />)
    expect(screen.getByText('Some Features that Made us Unique')).toBeInTheDocument()
  })

  it('renders six feature items', () => {
    render(<Features />)
    expect(screen.getByText('Expert Team')).toBeInTheDocument()
    expect(screen.getByText('Threat Monitoring')).toBeInTheDocument()
    expect(screen.getByText('Rapid Response')).toBeInTheDocument()
    expect(screen.getByText('Scalable Solutions')).toBeInTheDocument()
    expect(screen.getByText('Compliance Ready')).toBeInTheDocument()
    expect(screen.getByText('Security Training')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/certified professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 real-time monitoring/i)).toBeInTheDocument()
  })

  it('renders icons for each feature', () => {
    render(<Features />)
    const articles = screen.getAllByText(
      /Expert Team|Threat Monitoring|Rapid Response|Scalable Solutions|Compliance Ready|Security Training/,
    )
    expect(articles.length).toBe(6)
  })
})
