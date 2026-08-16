import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders the heading and six gold-icon service cards', () => {
    render(<ServicesGrid />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Vesper Church Services' }),
    ).toBeInTheDocument()

    for (const title of [
      'Daily Prayers',
      'Continous Teaching',
      'Set of Sermons',
      'Wedding',
      'Community Helpers',
      'Baptism',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    // Every card renders a lucide icon (inline svg)
    expect(document.querySelectorAll('svg').length).toBeGreaterThanOrEqual(6)
  })
})
