import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders the heading and the three case-study cards', () => {
    render(<CaseStudies />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Some of Our Great Stuffs' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(screen.getAllByText(/inspire design studio/i)).toHaveLength(3)
  })
})
