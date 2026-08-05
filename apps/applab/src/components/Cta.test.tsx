import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, supporting copy, and both download buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Get start from now and increase productivity',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Firmament morning sixth subdue darkness/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Download from Apple Store' })).toHaveAttribute(
      'href',
      '#home',
    )
    expect(screen.getByRole('link', { name: 'Download from Play Store' })).toHaveAttribute(
      'href',
      '#home',
    )
  })
})
