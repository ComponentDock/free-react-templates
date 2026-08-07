import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: /Why choose us/i })).toBeInTheDocument()

    for (const title of ['100% Uptime Guarantee', 'Safe and Secured', 'Our Dedicated Support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
