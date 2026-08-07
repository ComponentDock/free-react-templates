import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the four feature tiles', () => {
    render(<Features />)

    for (const title of [
      'Creative Design',
      'Experienced Style',
      'Product Research',
      'Affordable Price',
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument()
    }
  })
})
