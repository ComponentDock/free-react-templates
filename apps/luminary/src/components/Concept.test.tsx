import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Concept } from './Concept'

describe('Concept', () => {
  it('renders the heading', () => {
    render(<Concept />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Concept')
  })

  it('renders descriptive text', () => {
    render(<Concept />)
    expect(screen.getByText(/Sed ut perspiciatis/)).toBeInTheDocument()
  })

  it('renders the Get started button', () => {
    render(<Concept />)
    const btn = screen.getByRole('link', { name: /get started/i })
    expect(btn).toBeInTheDocument()
  })
})
