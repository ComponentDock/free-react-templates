import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the Products badge, heading, and subtext', () => {
    render(<Features />)

    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Everything You Need to Ship' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/From app hosting to managed databases/)).toBeInTheDocument()
  })

  it('renders the six feature cards with titles and blurbs', () => {
    render(<Features />)

    for (const title of [
      'App Hosting',
      'Managed Databases',
      'Edge Functions',
      'Object Storage',
      'Container Registry',
      'Load Balancing',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/Deploy any framework instantly/)).toBeInTheDocument()
    expect(screen.getByText(/S3-compatible object storage/)).toBeInTheDocument()
  })
})
