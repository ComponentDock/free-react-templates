import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and stats', () => {
    render(<About />)
    expect(screen.getByText(/We Are Studium An Online Learning Center/i)).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('50K+')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
  })
})
