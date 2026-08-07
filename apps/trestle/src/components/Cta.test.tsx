import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading and blurb', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Dare to dream of a modern home/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Pellentesque lorem dolor/)).toBeInTheDocument()
  })
})
