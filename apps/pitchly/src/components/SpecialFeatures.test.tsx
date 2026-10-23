import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecialFeatures } from './SpecialFeatures'

describe('SpecialFeatures', () => {
  it('renders the heading and the three feature tiles', () => {
    render(<SpecialFeatures />)

    expect(screen.getByRole('heading', { level: 2, name: 'Special Features' })).toBeInTheDocument()

    for (const title of ['Creative Design', 'Unlimited Features', 'Full Free Chat']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
