import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the heading and the four feature cards', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('heading', { name: /offer for you/i })).toBeInTheDocument()
    for (const feature of [
      'Advanced equipment',
      'Qualified doctors',
      'Certified services',
      'Emergency care',
    ]) {
      expect(screen.getByRole('heading', { name: feature })).toBeInTheDocument()
    }
  })
})
