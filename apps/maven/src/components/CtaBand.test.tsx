import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('shows the eyebrow and the team-intro heading', () => {
    render(<CtaBand />)

    expect(screen.getByText('Recent Work')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Creative work for client' }),
    ).toBeInTheDocument()
  })
})
