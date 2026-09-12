import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Studio } from './Studio'

describe('Studio', () => {
  it('renders the studio heading, description, image, and CTA', () => {
    render(<Studio />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Green Forest Studio' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Few would argue that/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Studio workspace/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View More/i })).toBeInTheDocument()
  })
})
