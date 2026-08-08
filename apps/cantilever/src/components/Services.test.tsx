import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: /What we offer to our clients/i }),
    ).toBeInTheDocument()
    for (const title of ['Architecture', 'Interior Design', 'Concept Design']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /View Details/i })).toHaveLength(3)
  })
})
