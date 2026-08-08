import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and six project images with captions', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Alex Complex for residence/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(screen.getAllByText(/Alex Complex for residence/i).length).toBeGreaterThanOrEqual(6)
  })
})
