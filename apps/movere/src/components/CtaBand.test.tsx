import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline and both call-to-action buttons', () => {
    render(<CtaBand />)

    expect(screen.getByRole('heading', { name: 'Ready to Make Your Move?' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call Now/ })).toBeInTheDocument()
  })
})
