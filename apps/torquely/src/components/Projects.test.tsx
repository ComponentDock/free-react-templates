import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and the four project cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Done Projects/i })).toBeInTheDocument()
    for (const title of [
      'Engine Testing Complated',
      'Change Oil Completed',
      'Engine Diagnostics',
      'Tire Change',
    ]) {
      expect(screen.getByRole('link', { name: new RegExp(title) })).toBeInTheDocument()
    }
    for (const category of ['Engine', 'Oil Change', 'Tire']) {
      expect(screen.getAllByText(category).length).toBeGreaterThan(0)
    }
  })
})
