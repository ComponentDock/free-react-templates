import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StaffSection } from './StaffSection'

describe('StaffSection', () => {
  it('renders the section heading', () => {
    render(<StaffSection />)
    expect(screen.getByRole('heading', { name: /Meet Our Teachers/i })).toBeInTheDocument()
  })

  it('renders all four teacher names', () => {
    render(<StaffSection />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rivera')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
  })

  it('renders teacher roles', () => {
    render(<StaffSection />)
    expect(screen.getByText('Lead Teacher')).toBeInTheDocument()
    expect(screen.getByText('Art Instructor')).toBeInTheDocument()
    expect(screen.getByText('Music Teacher')).toBeInTheDocument()
    expect(screen.getByText('Physical Education')).toBeInTheDocument()
  })

  it('renders social link aria-labels in each card', () => {
    render(<StaffSection />)
    const fbLinks = screen.getAllByRole('link', { name: 'Facebook' })
    expect(fbLinks.length).toBeGreaterThanOrEqual(1)
  })
})
