import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and all six feature tiles', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'The Features' })).toBeInTheDocument()

    for (const title of [
      'Powerful Apps',
      'Strategic Partners',
      'Business in Mind',
      'Innovative Technologies',
      'Many Features',
      'Easy to use',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
