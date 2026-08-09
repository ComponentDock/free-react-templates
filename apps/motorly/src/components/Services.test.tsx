import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title and four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We Do\?/i })).toBeInTheDocument()
    for (const card of ['Engine Overhaul', 'Power Steering', 'Oil change', 'Upgrades Car']) {
      expect(screen.getByRole('heading', { name: card })).toBeInTheDocument()
    }
  })
})
