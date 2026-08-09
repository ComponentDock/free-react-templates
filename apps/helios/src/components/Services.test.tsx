import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and all six service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Complete Solar Solutions' })).toBeInTheDocument()
    for (const title of [
      'Residential Solar',
      'Commercial Solar',
      'Battery Storage',
      'Solar Maintenance',
      'Energy Audit',
      'Roof Assessment',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
