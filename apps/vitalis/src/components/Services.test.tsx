import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the four procedure cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /offer for you/i })).toBeInTheDocument()
    for (const procedure of [
      'Body procedures',
      'Facial Procedures',
      'Breast procedures',
      'Skin care & Beauty',
    ]) {
      expect(screen.getByRole('heading', { name: procedure })).toBeInTheDocument()
    }
  })
})
