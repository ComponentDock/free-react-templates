import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Our Topnotch Features/i)
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Smart Security')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Colors')).toBeInTheDocument()
    expect(screen.getByText('Endless Support')).toBeInTheDocument()
  })

  it('has description text for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/State-of-the-art security/i)).toBeInTheDocument()
    expect(screen.getByText(/Customize your workout/i)).toBeInTheDocument()
    expect(screen.getByText(/Our dedicated support team/i)).toBeInTheDocument()
  })
})
