import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientLogos } from './ClientLogos'
import { CLIENTS } from '../data'

describe('ClientLogos', () => {
  it('renders all five client wordmarks on a light background', () => {
    const { container } = render(<ClientLogos />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-mist')

    for (const client of CLIENTS) {
      expect(screen.getByText(client)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('span')).toHaveLength(CLIENTS.length)
  })
})
