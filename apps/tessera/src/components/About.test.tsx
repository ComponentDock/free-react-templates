import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the eyebrow, headline, paragraph, and read-more link', () => {
    render(<About />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /We are the best Interior, Exterior/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/On her way she met a copy/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Read more/ })).toBeInTheDocument()
  })
})
