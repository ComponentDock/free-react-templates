import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What We Offer')
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Music Class')).toBeInTheDocument()
    expect(screen.getByText('Math Class')).toBeInTheDocument()
    expect(screen.getByText('English Class')).toBeInTheDocument()
    expect(screen.getByText('Reading for Kids')).toBeInTheDocument()
    expect(screen.getByText('History Class')).toBeInTheDocument()
    expect(screen.getByText('Active Class')).toBeInTheDocument()
  })
})
