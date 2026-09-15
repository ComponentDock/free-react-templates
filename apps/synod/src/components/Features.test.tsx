import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards with title and text', () => {
    render(<Features />)

    expect(screen.getByText('Spread Love')).toBeInTheDocument()
    expect(screen.getByText('Bible Study')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)

    expect(screen.getByText(/unconditional love/)).toBeInTheDocument()
    expect(screen.getByText(/weekly Bible study/)).toBeInTheDocument()
    expect(screen.getByText(/meaningful connections/)).toBeInTheDocument()
  })
})
