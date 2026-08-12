import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialStrip } from './SocialStrip'

describe('SocialStrip', () => {
  it('shows six equally spaced social links', () => {
    render(<SocialStrip />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Pinterest', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
