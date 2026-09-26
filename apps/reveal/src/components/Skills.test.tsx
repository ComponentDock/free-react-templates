import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Skills')
  })

  it('renders all skill counters', () => {
    render(<Skills />)
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('renders skill labels', () => {
    render(<Skills />)
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('HTML/CSS')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
  })
})
