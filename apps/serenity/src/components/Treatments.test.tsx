import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Treatments } from './Treatments'

describe('Treatments', () => {
  it('shows the Treatments heading and label', () => {
    render(<Treatments />)
    expect(screen.getByText('Treatments')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Signature Treatments' })).toBeInTheDocument()
  })

  it('renders the four treatment tiles', () => {
    render(<Treatments />)
    for (const name of ['Salt & Aroma', 'Hydro', 'Hot Stone', 'Aroma']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })
})
