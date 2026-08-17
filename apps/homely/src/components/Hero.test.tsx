import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, CTA, and the calculator card', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/The simple online home loan\./)
    expect(screen.getByText(/Financial uncertainty is hard on employees/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')

    expect(
      screen.getByRole('heading', { level: 2, name: 'How much you want?' }),
    ).toBeInTheDocument()
    expect(screen.getByText('We provide online instant cash loans.')).toBeInTheDocument()
    expect(screen.getByLabelText('Amount you want')).toBeInTheDocument()
    expect(screen.getByLabelText('Month')).toBeInTheDocument()
    expect(screen.getByRole('slider', { name: 'Loan amount' })).toHaveValue('20000')
    expect(screen.getByText('$20,000')).toBeInTheDocument()
  })
})
