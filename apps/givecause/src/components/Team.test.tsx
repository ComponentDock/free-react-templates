import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Meet Our Team')
  })

  it('renders four team member cards', () => {
    render(<Team />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
  })

  it('displays roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('Founder & Director')).toBeInTheDocument()
    expect(screen.getByText('Program Manager')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Coordinator')).toBeInTheDocument()
    expect(screen.getByText('Outreach Lead')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<Team />)
    expect(screen.getByAltText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByAltText('David Kim')).toBeInTheDocument()
  })
})
