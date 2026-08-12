import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards with distinct blurbs', () => {
    render(<Services />)

    for (const title of ['60+ UX courses', 'Expert instructors', 'Life time access']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByText(/Curated, hands-on courses/)).toBeInTheDocument()
    expect(screen.getByText(/Learn directly from industry professionals/)).toBeInTheDocument()
    expect(screen.getByText(/Pay once and keep your courses forever/)).toBeInTheDocument()
  })
})
