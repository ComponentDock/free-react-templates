import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the heading, experience stat, and blurb', () => {
    render(<Welcome />)

    expect(
      screen.getByRole('heading', { name: /Secrets of Success of Our Projects/ }),
    ).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText(/Since 1980/)).toBeInTheDocument()
  })
})
