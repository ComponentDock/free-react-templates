import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading and the details link', () => {
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Turn every channel into a revenue channel and drive business growth/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View more details/i })).toBeInTheDocument()
  })
})
