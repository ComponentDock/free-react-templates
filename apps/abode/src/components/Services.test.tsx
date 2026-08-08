import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We Do/i })).toBeInTheDocument()
    for (const title of [
      'Commercial Architecture Design',
      'Residential Architecture Design',
      'Architecture Design',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
