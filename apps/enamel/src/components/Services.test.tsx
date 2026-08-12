import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading block and all eight service cards', () => {
    render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Clinic Services' })).toBeInTheDocument()

    for (const title of [
      'Dental Implants',
      'Cosmetic Dentistry',
      'Dental Care',
      'Teeth Whitening',
      'Dental Calculus',
      'Periodontics',
      'Clip & Braces',
      'Root Canal',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
