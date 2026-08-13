import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and four service items', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Offered Services' })).toBeInTheDocument()
    for (const name of [
      '24/7 Emergency',
      'Expert Consultation',
      'Intensive Care',
      'Family Planning',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 4 }).length).toBe(4)
  })
})
