import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the headline, benefit bullets and both call buttons', () => {
    render(<Cta />)
    expect(screen.getByRole('heading', { name: 'Ready to Ship?' })).toBeInTheDocument()
    expect(screen.getAllByText('Free tracking').length).toBeGreaterThan(0)
    expect(screen.getByText('No hidden fees')).toBeInTheDocument()
    expect(screen.getByText('Cancel anytime')).toBeInTheDocument()
    expect(screen.getAllByText('Call 1-800-SWIFT-GO').length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Get a Quote' }).length).toBeGreaterThan(0)
  })
})
