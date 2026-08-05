import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the three pricing plans with their feature lists and purchase buttons', () => {
    render(<Pricing />)

    for (const name of ['Real Basic', 'Real Standard', 'Real Ultimate']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(screen.getAllByText('Secure Online Transfer')).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Purchase Now' })).toHaveLength(3)
  })
})
