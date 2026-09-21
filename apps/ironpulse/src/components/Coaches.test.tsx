import { render, screen } from '@testing-library/react'
import { Coaches } from './Coaches'
import { describe, expect, it } from 'vitest'

describe('Coaches', () => {
  it('renders heading and all 4 coach profiles', () => {
    render(<Coaches />)
    expect(screen.getByText('Our Coaches')).toBeInTheDocument()
    for (const name of ['Travor James', 'Leonard Smith', 'James Buffer', 'Maricar Collins']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders social links for each coach', () => {
    render(<Coaches />)
    expect(screen.getAllByLabelText(/Travor James Twitter/)).toHaveLength(1)
    expect(screen.getAllByLabelText(/Travor James Facebook/)).toHaveLength(1)
    expect(screen.getAllByLabelText(/Travor James Instagram/)).toHaveLength(1)
  })
})
