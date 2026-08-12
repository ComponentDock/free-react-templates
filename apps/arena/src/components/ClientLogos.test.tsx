import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders at least four logo images in a row', () => {
    render(<ClientLogos />)
    const logos = screen.getAllByRole('img', { name: /logo/i })
    expect(logos.length).toBeGreaterThanOrEqual(4)
    for (const logo of logos) {
      expect(logo).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
