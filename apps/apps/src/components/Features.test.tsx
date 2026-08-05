import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the icon feature tiles with their titles', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Some Features that Made us Unique' }),
    ).toBeInTheDocument()
    for (const title of ['Expert Technicians', 'Professional Service', 'Great Support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
