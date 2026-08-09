import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Latest Services/i })).toBeInTheDocument()
    for (const title of [
      'Wedding Ceremony',
      'City Transfer',
      'Airport Transfer',
      'Whole City Tour',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
