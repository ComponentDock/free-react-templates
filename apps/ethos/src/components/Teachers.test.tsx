import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Teachers } from './Teachers'

describe('Teachers', () => {
  it('renders the section heading', () => {
    render(<Teachers />)
    expect(screen.getByRole('heading', { name: 'Teachers' })).toBeInTheDocument()
  })

  it('renders all three teacher cards with names and roles', () => {
    render(<Teachers />)
    expect(screen.getByRole('heading', { name: 'Sarah Johnson' })).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing Lead')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Michael Chen' })).toBeInTheDocument()
    expect(screen.getByText('Web Development Instructor')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Emily Roberts' })).toBeInTheDocument()
    expect(screen.getByText('Graphic Design Professor')).toBeInTheDocument()
  })

  it('renders social icons for each teacher', () => {
    render(<Teachers />)
    const socialLinks = screen.getAllByRole('link', {
      name: /Facebook|Twitter|Instagram|LinkedIn/i,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(12) // 4 per teacher × 3
  })
})
