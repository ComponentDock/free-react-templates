import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'
import { describe, expect, it } from 'vitest'

const expectedTitles = [
  'Professional',
  'Eco-friendly',
  'Affordable Rates',
  'Fully Insured & Trusted',
]

describe('ChooseUs', () => {
  it('renders the section title and four feature blocks', () => {
    render(<ChooseUs />)
    expect(screen.getByText('Why choose us?')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Why People Choose us?' }),
    ).toBeInTheDocument()
    for (const title of expectedTitles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('writes a short paragraph for every reason', () => {
    render(<ChooseUs />)
    expect(screen.getByText(/background-checked cleaners/)).toBeInTheDocument()
    expect(screen.getByText(/non-toxic products/)).toBeInTheDocument()
    expect(screen.getByText(/Transparent pricing/)).toBeInTheDocument()
    expect(screen.getByText(/Every visit is covered/)).toBeInTheDocument()
  })
})
