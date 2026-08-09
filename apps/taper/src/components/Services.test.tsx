import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Professional Services' })).toBeInTheDocument()
    for (const name of ['Stylish Hair Cut', 'Body Massege', 'Breard Style']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })
})
