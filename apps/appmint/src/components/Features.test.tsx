import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, four feature tiles, and a Learn More button', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'App Features' })).toBeInTheDocument()

    for (const title of [
      'Rapidiously Monetize',
      'Premium Quality',
      'Chat with love',
      '3d Display',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })
})
