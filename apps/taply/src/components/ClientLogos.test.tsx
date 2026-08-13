import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClientLogos } from './ClientLogos'
import { clientLogos } from '../data'

describe('ClientLogos', () => {
  it('renders the grey client logo placeholders', () => {
    const { container } = render(<ClientLogos />)

    for (const logo of clientLogos) {
      expect(screen.getByText(logo)).toBeInTheDocument()
    }
    // All placeholders are decorative spans (no img role in Testing Library).
    expect(container.querySelectorAll('span').length).toBeGreaterThanOrEqual(clientLogos.length)
  })
})
