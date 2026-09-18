import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Searching')).toBeInTheDocument()
    expect(screen.getByText('Applying')).toBeInTheDocument()
    expect(screen.getByText('Security')).toBeInTheDocument()
    expect(screen.getByText('Notifications')).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/Find the perfect job/)).toBeInTheDocument()
    expect(screen.getByText(/Apply to multiple jobs/)).toBeInTheDocument()
    expect(screen.getByText(/Your personal data/)).toBeInTheDocument()
    expect(screen.getByText(/Get instant notifications/)).toBeInTheDocument()
  })
})
