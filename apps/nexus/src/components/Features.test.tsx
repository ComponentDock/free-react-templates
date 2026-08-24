import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
  })

  it('renders all six feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Illustration')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
    expect(screen.getByText('Easy to use')).toBeInTheDocument()
    expect(screen.getByText('Web development')).toBeInTheDocument()
    expect(screen.getByText('Intuitive')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
  })
})
