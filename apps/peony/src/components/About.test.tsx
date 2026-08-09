import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and the four service features', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /a world class beauty salon company/i }),
    ).toBeInTheDocument()
    for (const name of ['Makeup', 'Hair Styling', 'Nails', 'Body Treatment']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })
})
