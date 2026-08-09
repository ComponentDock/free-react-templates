import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, blurb and both action buttons', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Secure Your Organization?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Talk to Expert' })).toBeInTheDocument()
  })
})
