import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading and the call-to-action button', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Innovative IT Solution for your Business/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started Now' })).toBeInTheDocument()
  })
})
