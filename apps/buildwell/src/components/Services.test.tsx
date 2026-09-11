import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the Our Services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    const titles = [
      'Construction',
      'Renovation',
      'Architecture',
      'Painting',
      'Decorating',
      'Consulting',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
