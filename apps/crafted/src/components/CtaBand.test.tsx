import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading and the estimate button', () => {
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Get to Know Project Estimate?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Estimate for Free' })).toBeInTheDocument()
  })
})
