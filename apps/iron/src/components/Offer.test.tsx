import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders section title and 3 offer cards', () => {
    render(<Offer />)
    expect(
      screen.getByRole('heading', { level: 2, name: /we care about what we offer/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Regular Exercise')).toBeInTheDocument()
    expect(screen.getByText('Training on the go')).toBeInTheDocument()
    expect(screen.getByText('Body Building Packages')).toBeInTheDocument()
  })
})
