import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the badge, headline and subcopy', () => {
    render(<Hero />)

    expect(screen.getByText('Trusted by 50,000+ learners worldwide')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Learn Without/)
    expect(heading.textContent).toContain('Limits')

    expect(screen.getByText(/Master new skills with world-class instructors/)).toBeInTheDocument()
  })

  it('shows the two call-to-action buttons and trust badges', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Explore Courses/ })).toHaveAttribute(
      'href',
      '#courses',
    )
    expect(screen.getByRole('link', { name: /View Pricing/ })).toHaveAttribute('href', '#pricing')

    expect(screen.getByText('4.8 average rating')).toBeInTheDocument()
    expect(screen.getByText('30-day money-back guarantee')).toBeInTheDocument()
    expect(screen.getByText('Lifetime access')).toBeInTheDocument()
  })

  it('shows the four hero stats and the browse link', () => {
    render(<Hero />)

    expect(screen.getByText('50K+')).toBeInTheDocument()
    expect(screen.getByText('Active Students')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Expert Instructors')).toBeInTheDocument()
    expect(screen.getByText('2,500+')).toBeInTheDocument()
    expect(screen.getByText('Quality Courses')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('Success Rate')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Browse Categories/ })).toHaveAttribute(
      'href',
      '#categories',
    )
  })
})
