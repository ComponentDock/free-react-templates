import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the headline and the gold call-to-action button', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { name: /Join us today without any hesitation/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })
})
