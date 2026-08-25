import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Toothcare Services')).toBeInTheDocument()
  })

  it('renders all eight service cards', () => {
    render(<Services />)
    const titles = [
      'Tooth Protection',
      'Dental Implants',
      'Dental Care',
      'Teeth Whitening',
      'Dental Calculus',
      'Tooth Removal',
      'Removal of Tartar',
      'Tooth Inspection',
    ]
    titles.forEach((t) => expect(screen.getByText(t)).toBeInTheDocument())
  })
})
