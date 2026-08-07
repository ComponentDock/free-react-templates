import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FunFacts } from './FunFacts'

describe('FunFacts', () => {
  it('renders the heading, the hosted claim, and the four counter stats', () => {
    render(<FunFacts />)

    expect(screen.getByRole('heading', { level: 2, name: /Some fun facts/i })).toBeInTheDocument()
    expect(screen.getByText(/100,000 websites hosted/i)).toBeInTheDocument()

    for (const label of [
      'CMS Installation',
      'Awards Won',
      'Registered Domains',
      'Satisfied Customers',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
