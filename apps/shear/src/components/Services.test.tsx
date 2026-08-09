import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the More Services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'More Services' })).toBeInTheDocument()
  })

  it('renders six service cards', () => {
    render(<Services />)
    for (const name of [
      'Hair Cut',
      'Facial & Body Care',
      'Massages',
      'Shaving',
      'Shampoo',
      'Hair Styling',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })
})
