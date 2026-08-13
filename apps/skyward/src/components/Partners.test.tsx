import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders a strip of six grayscale partner logos', () => {
    render(<Partners />)

    const logos = screen.getAllByRole('img', { name: /partner logo/i })
    expect(logos).toHaveLength(6)
    for (const logo of logos) {
      expect(logo.className).toContain('grayscale')
      expect(logo).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/skyward'))
    }
  })
})
