import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QuoteIntro } from './QuoteIntro'

describe('QuoteIntro', () => {
  it('shows the promise headline and paragraph', () => {
    render(<QuoteIntro />)
    expect(
      screen.getByRole('heading', {
        name: 'We promised to take care our patients and we delivered.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Thousands of families across the city trust Enamel/i),
    ).toBeInTheDocument()
  })
})
