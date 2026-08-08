import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and six feature cards with titles and blurbs', () => {
    render(<Features />)

    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Everything You Need to Ship APIs' }),
    ).toBeInTheDocument()

    const titles = [
      'API Gateway',
      'Rate Limiting',
      'Authentication',
      'Analytics Dashboard',
      'Webhook Management',
      'SDK Generation',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    // Blurbs present
    expect(screen.getByText(/Route, transform, and secure API traffic/)).toBeInTheDocument()
    expect(screen.getByText(/Auto-generate type-safe client SDKs/)).toBeInTheDocument()
  })
})
