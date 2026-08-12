import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders the section heading', () => {
    render(<ClientLogos />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Some Latest Gym With me' }),
    ).toBeInTheDocument()
  })

  it('renders five client wordmarks', () => {
    render(<ClientLogos />)

    for (const name of ['FLEXFIT', 'POWERHOUSE', 'IRONWORKS', 'STRONGHOLD', 'GRIT LAB']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
