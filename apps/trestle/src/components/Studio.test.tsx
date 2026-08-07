import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Studio } from './Studio'

describe('Studio', () => {
  it('renders the studio heading, blurb, and CTA', () => {
    render(<Studio />)

    expect(
      screen.getByRole('heading', { level: 2, name: /We are a creative Architecture Studio/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Pellentesque lorem dolor/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See Project' })).toBeInTheDocument()
  })
})
