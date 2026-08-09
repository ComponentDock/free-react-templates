import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
    for (const service of ['Coloring', 'Haircut', 'Hairstyle']) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument()
    }
  })
})
