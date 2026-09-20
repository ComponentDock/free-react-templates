import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service items', () => {
    render(<Services />)
    const items = screen.getAllByText('Scholarship')
    expect(items).toHaveLength(3)
  })

  it('renders Available subtitle for each', () => {
    render(<Services />)
    const subs = screen.getAllByText('Available')
    expect(subs).toHaveLength(3)
  })
})
