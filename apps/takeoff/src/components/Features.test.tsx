import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, blurb, and six feature tiles', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2, name: 'Best Features' })).toBeInTheDocument()

    for (const title of [
      'Unlimited Features',
      'Cloud Storage',
      'Modern Design',
      'Android Platform',
      'Strategy Solutions',
      'Fully Responsive Design',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByText(/Every feature your app needs/).length).toBeGreaterThanOrEqual(1)
  })
})
