import { render, screen } from '@testing-library/react'
import { Coaches } from './Coaches'
import { describe, expect, it } from 'vitest'

describe('Coaches', () => {
  it('renders heading and all 4 coach profiles', () => {
    render(<Coaches />)
    expect(screen.getByText('Our Coaches')).toBeInTheDocument()
    for (const name of ['Oscar Brook', 'Leonard Smith', 'James Buffer', 'Maricar Collins']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders social links for each coach', () => {
    render(<Coaches />)
    expect(screen.getAllByLabelText(/Oscar Brook Twitter/)).toHaveLength(1)
    expect(screen.getAllByLabelText(/Oscar Brook Facebook/)).toHaveLength(1)
    expect(screen.getAllByLabelText(/Oscar Brook Instagram/)).toHaveLength(1)
  })
})
