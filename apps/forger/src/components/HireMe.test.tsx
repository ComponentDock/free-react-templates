import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HireMe } from './HireMe'

describe('HireMe', () => {
  it('displays the Available text', () => {
    render(<HireMe />)
    expect(screen.getByText(/Available/)).toBeInTheDocument()
    expect(screen.getByText(/For Freelancing/)).toBeInTheDocument()
  })

  it('shows the Hire me button', () => {
    render(<HireMe />)
    expect(screen.getByRole('link', { name: 'Hire me' })).toBeInTheDocument()
  })
})
