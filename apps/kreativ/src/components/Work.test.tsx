import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Work } from './Work'

describe('Work', () => {
  it('renders the heading, the view-all link, and three project cards', () => {
    render(<Work />)
    expect(screen.getByRole('heading', { name: 'Selected Work' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View All Projects/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Nova Fintech Rebrand' }).length).toBeGreaterThan(
      0,
    )
    expect(screen.getAllByRole('heading', { name: 'Mindful Wellness App' }).length).toBeGreaterThan(
      0,
    )
    expect(screen.getAllByRole('heading', { name: 'Urban Eats Platform' }).length).toBeGreaterThan(
      0,
    )
  })

  it('shows category tags and descriptions', () => {
    render(<Work />)
    expect(screen.getAllByText('Branding').length).toBe(2)
    expect(screen.getAllByText('Mobile App').length).toBe(2)
    expect(screen.getAllByText('Web Design').length).toBe(2)
    expect(screen.getByText(/Complete brand overhaul/i)).toBeInTheDocument()
    expect(screen.getByText(/meditation and wellness app/i)).toBeInTheDocument()
    expect(screen.getByText(/food delivery platform/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { hidden: true }).length).toBeGreaterThanOrEqual(3)
  })
})
