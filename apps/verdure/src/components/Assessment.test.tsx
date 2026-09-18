import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Assessment } from './Assessment'

describe('Assessment', () => {
  it('renders the heading and feature items', () => {
    render(<Assessment />)
    expect(screen.getByRole('heading', { level: 2, name: /Assessment/i })).toBeInTheDocument()
    expect(screen.getByText(/We Deal With Love/i)).toBeInTheDocument()
    expect(screen.getByText(/We Are Professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/We Deliver Our Best Services/i)).toBeInTheDocument()
  })
})
