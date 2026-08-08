import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the badge, headline and call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByText('Serving clients since 1985')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Trusted Legal Excellence/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Schedule Consultation/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Practice Areas' })).toHaveAttribute(
      'href',
      '#services',
    )
  })

  it('shows trust indicators', () => {
    render(<Hero />)

    expect(screen.getByText('AV Rated')).toBeInTheDocument()
    expect(screen.getByText('Martindale-Hubbell')).toBeInTheDocument()
    expect(screen.getByText('24/7 Available')).toBeInTheDocument()
    expect(screen.getByText('For emergencies')).toBeInTheDocument()
  })

  it('renders the case evaluation form', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Free Case Evaluation' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Request Free Consultation' })).toBeInTheDocument()
  })
})
