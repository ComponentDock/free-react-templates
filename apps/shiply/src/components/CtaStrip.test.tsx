import { render, screen } from '@testing-library/react'
import { CtaStrip } from './CtaStrip'
import { describe, expect, it } from 'vitest'

describe('CtaStrip', () => {
  it('renders the heading and the Get Started button', () => {
    render(<CtaStrip />)
    expect(screen.getByRole('heading', { level: 2, name: 'Try Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#quote')
  })
})
