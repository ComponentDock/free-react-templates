import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

const serviceNames = [
  'Beauty Massage',
  'Facial Therapy',
  'Skin Care',
  'Parlor & Beauty',
  'Eye Shadow',
  'Relaxation Room',
  'MakeUp',
  'Aroma Therapy',
]

describe('Services', () => {
  it('shows the section heading and eight service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Beauty & Spa Services' })).toBeInTheDocument()

    for (const name of serviceNames) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })
})
