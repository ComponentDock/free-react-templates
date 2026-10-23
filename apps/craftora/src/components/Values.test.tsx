import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Values } from './Values'

describe('Values', () => {
  it('renders the three numbered values with headings and blurbs', () => {
    render(<Values />)

    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
    expect(screen.getByText('03.')).toBeInTheDocument()

    for (const title of ['Our Values', 'Our Mission', 'Our Philosophy']) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByText(/praesentium eos nulla qui commodi/)).toHaveLength(3)
  })
})
