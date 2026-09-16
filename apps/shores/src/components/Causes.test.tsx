import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders section heading', () => {
    render(<Causes />)
    expect(screen.getByRole('heading', { name: /our major causes/i })).toBeInTheDocument()
  })

  it('renders three cause cards', () => {
    render(<Causes />)
    expect(screen.getByText('Give Donation')).toBeInTheDocument()
    expect(screen.getByText('Give Inspiration')).toBeInTheDocument()
    expect(screen.getByText('Become Volunteer')).toBeInTheDocument()
  })

  it('renders descriptions for each cause', () => {
    render(<Causes />)
    expect(screen.getByText(/Every donation helps/i)).toBeInTheDocument()
    expect(screen.getByText(/We inspire communities/i)).toBeInTheDocument()
    expect(screen.getByText(/Join our team/i)).toBeInTheDocument()
  })
})
