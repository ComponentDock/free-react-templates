import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchCTA } from './SearchCTA'

describe('SearchCTA', () => {
  it('renders the headline and CTA button', () => {
    render(<SearchCTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Choose Your Dream House')
    expect(screen.getByRole('link', { name: /search places/i })).toBeInTheDocument()
  })
})
