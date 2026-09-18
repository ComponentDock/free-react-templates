import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders heading', () => {
    render(<Features />)
    expect(screen.getByText('Why JobLaunch')).toBeInTheDocument()
  })

  it('renders 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Search Millions of Jobs')).toBeInTheDocument()
    expect(screen.getByText('Location Search')).toBeInTheDocument()
    expect(screen.getByText('Top Careers')).toBeInTheDocument()
    expect(screen.getByText('Search Expert Candidates')).toBeInTheDocument()
    expect(screen.getByText('Easy To Manage Jobs')).toBeInTheDocument()
    expect(screen.getByText('Online Reviews')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Access a vast database/)).toBeInTheDocument()
    expect(screen.getByText(/Find jobs near you/)).toBeInTheDocument()
  })
})
