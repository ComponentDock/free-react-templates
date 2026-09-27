import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cities } from './Cities'

describe('Cities', () => {
  it('renders the section heading', () => {
    render(<Cities />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Properties for these Cities',
    )
  })

  it('shows three city cards', () => {
    render(<Cities />)
    expect(screen.getByText('Miami')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
    expect(screen.getByText('Illinois')).toBeInTheDocument()
  })

  it('shows listing counts', () => {
    render(<Cities />)
    expect(screen.getByText('245 Properties')).toBeInTheDocument()
    expect(screen.getByText('182 Properties')).toBeInTheDocument()
    expect(screen.getByText('97 Properties')).toBeInTheDocument()
  })
})
