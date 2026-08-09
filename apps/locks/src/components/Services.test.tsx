import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
    for (const title of [
      'Haircuts & Styling',
      'Beard Treatment',
      'Coloring Services',
      'Beard Waxing',
    ]) {
      expect(screen.getByRole('heading', { name: new RegExp(title, 'i') })).toBeInTheDocument()
    }
  })
})
