import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('renders the heading, subtitle, and four numbered steps', () => {
    render(<Process />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'From Origin to Cup' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/commitment to quality/)).toBeInTheDocument()

    for (const step of ['Sourcing', 'Roasting', 'Cupping', 'Serving']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }

    for (let i = 1; i <= 4; i += 1) {
      expect(screen.getByText(`Step ${i}`)).toBeInTheDocument()
    }
  })
})
