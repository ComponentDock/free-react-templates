import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the heading and stat counters', () => {
    render(<Stats />)
    expect(
      screen.getByRole('heading', { name: /Let the number speaks for us/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/7000\+/i)).toBeInTheDocument()
    expect(screen.getByText(/90\+/i)).toBeInTheDocument()
    expect(screen.getByText(/2900\+/i)).toBeInTheDocument()
  })
})
