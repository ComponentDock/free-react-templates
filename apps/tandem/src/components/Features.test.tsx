import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, blurb, and six feature tiles', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Powerful Features As Always' }),
    ).toBeInTheDocument()

    for (const title of [
      'Fast & Powerful',
      'Easily Editable',
      'Cloud Storage',
      'Easy Notifications',
      'Fully Responsive',
      'Editable Layout',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(
      screen.getByText(/Everything you need to impress users and grow downloads/),
    ).toBeInTheDocument()
  })
})
