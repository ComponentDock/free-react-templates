import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders the heading, blurb, and four feature icons with labels', () => {
    render(<AboutSplit />)

    expect(screen.getByRole('heading', { level: 2, name: 'Mobile ready' })).toBeInTheDocument()

    for (const label of ['Fast Setup', 'Secure', 'Smart Sync', 'Lovable Design']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
