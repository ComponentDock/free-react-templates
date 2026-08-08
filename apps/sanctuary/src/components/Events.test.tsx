import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('shows the Upcoming Events heading and intro', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { level: 2, name: /Upcoming Events/ })).toBeInTheDocument()
    expect(screen.getByText(/Join us for fellowship, growth, and community/)).toBeInTheDocument()
  })

  it('shows the featured Easter Sunday Celebration card', () => {
    render(<Events />)

    expect(screen.getByText('Featured Event')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Easter Sunday Celebration/ }),
    ).toBeInTheDocument()
    expect(screen.getByText('April 20, 2025')).toBeInTheDocument()
    expect(screen.getByText('Main Sanctuary')).toBeInTheDocument()
    expect(screen.getByText(/special Easter celebration with worship/)).toBeInTheDocument()
  })

  it('shows the additional event rows and a View All Events link', () => {
    render(<Events />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Community Service Day' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Marriage Enrichment Workshop' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Vacation Bible School' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/park cleanup, food bank service/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View All Events/ })).toBeInTheDocument()
  })
})
