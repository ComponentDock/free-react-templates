import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, subline, and three service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: /Some Features that Made us Unique/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Who are in extremely love with eco friendly system/i),
    ).toBeInTheDocument()
    for (const title of [
      'Basic & Common Repairs',
      'Brake Repairs & Services',
      'Preventive Maintenance',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
