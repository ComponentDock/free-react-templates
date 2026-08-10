import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section label and the What We Do heading', () => {
    render(<Services />)

    expect(screen.getByText('Shape Your Body')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What We Do?' })).toBeInTheDocument()
  })

  it('renders the four service cards', () => {
    render(<Services />)

    for (const title of [
      'Analyze Your Goal',
      'Work Hard On It',
      'Improve Your Performance',
      'Achieve Your Perfect Body',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
