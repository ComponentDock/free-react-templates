import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, blurb, and six feature tiles', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2, name: 'Awesome Features' })).toBeInTheDocument()

    expect(
      screen.getByText(/Everything you need to launch, grow, and support your app/),
    ).toBeInTheDocument()

    for (const title of [
      'Expert Technicians',
      'Professional Service',
      'Great Support',
      'Reliable Updates',
      'Cloud Backup',
      'Smart Analytics',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
