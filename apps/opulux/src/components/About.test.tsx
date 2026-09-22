import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about section with features', () => {
    render(<About />)
    expect(screen.getByText('Welcome To Our Hotel')).toBeInTheDocument()
    expect(screen.getByText('24/7 Front Desk')).toBeInTheDocument()
    expect(screen.getByText('Restaurant & Bar')).toBeInTheDocument()
    expect(screen.getByText('Transfer Services')).toBeInTheDocument()
    expect(screen.getByText('Spa & Suites')).toBeInTheDocument()
  })
})
