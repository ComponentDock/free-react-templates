import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RegVault } from './RegVault'

describe('RegVault', () => {
  it('renders the main heading', () => {
    render(<RegVault />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Set The Event')
  })

  it('renders the form panel', () => {
    render(<RegVault />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('renders the image panel with overlay', () => {
    render(<RegVault />)
    expect(screen.getByAltText(/event performer/i)).toBeInTheDocument()
    expect(screen.getByText(/31st East Street/)).toBeInTheDocument()
  })
})
