import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three numbered service cards with titles and blurbs', () => {
    render(<Services />)

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: /Brand Strategy/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Digital Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Web Development/i })).toBeInTheDocument()

    expect(screen.getByText(/brand position/i)).toBeInTheDocument()
    expect(screen.getByText(/pixel-perfect interfaces/i)).toBeInTheDocument()
  })
})
