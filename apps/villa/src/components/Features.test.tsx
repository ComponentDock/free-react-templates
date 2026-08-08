import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three numbered feature steps on the dark band', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /01/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /02/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /03/ })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Becoming A Dvd Repair Expert Online/i }),
    ).toHaveLength(3)
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/i)).toHaveLength(3)
  })
})
