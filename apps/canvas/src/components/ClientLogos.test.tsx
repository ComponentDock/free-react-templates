import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CLIENTS } from '../data'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders the four muted wordmarks on a light band', () => {
    const { container } = render(<ClientLogos />)
    expect(screen.getByRole('region', { name: 'Our clients' })).toBeInTheDocument()
    for (const name of CLIENTS) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-mist')
    for (const wordmark of Array.from(container.querySelectorAll('span'))) {
      expect(wordmark.className).toContain('uppercase')
    }
  })
})
