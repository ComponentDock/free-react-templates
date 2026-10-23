import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the full-width call-to-action band', () => {
    render(<CtaBand />)

    expect(screen.getByRole('link', { name: "Hire Us & Let's Get Started" })).toBeInTheDocument()
  })
})
