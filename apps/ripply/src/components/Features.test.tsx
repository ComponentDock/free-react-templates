import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the title, subtitle and five icon cards', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Powerful Apps Features/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Everything you need to showcase/i)).toBeInTheDocument()

    for (const title of [
      'Unique Design',
      'Fast Performance',
      'Pixel Perfect',
      'Secure & Safe',
      'Easy Customize',
    ]) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
  })
})
