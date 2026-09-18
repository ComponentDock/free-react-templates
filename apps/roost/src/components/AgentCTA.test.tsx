import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AgentCTA } from './AgentCTA'

describe('AgentCTA', () => {
  it('renders the headline and Advance Search button', () => {
    render(<AgentCTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Choose Your House for Only $120,000',
    )
    expect(screen.getByRole('link', { name: /advance search/i })).toBeInTheDocument()
  })
})
