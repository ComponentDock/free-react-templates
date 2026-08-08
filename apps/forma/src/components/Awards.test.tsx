import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Awards } from './Awards'

describe('Awards', () => {
  it('renders the heading and six award items', () => {
    render(<Awards />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Awards & Accolades' }),
    ).toBeInTheDocument()

    for (const title of [
      'Best Residential Design',
      'Hospitality Design Award',
      'Innovation in Commercial Design',
      'Emerging Studio of the Year',
      'Sustainable Design Leader',
      'Top 50 Interior Designers',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/2025|2024|2023/).length).toBeGreaterThanOrEqual(6)
  })
})
