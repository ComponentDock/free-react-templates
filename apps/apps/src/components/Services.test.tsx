import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and the three service tiles', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Some Features that Made us Unique' }),
    ).toBeInTheDocument()
    for (const title of ['Expert Technicians', 'Professional Service', 'Great Support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
