import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders 3 service items with headings', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Outdoor Activities/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Experienced Trainers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Environment/i })).toBeInTheDocument()
    expect(screen.getByText(/Practice yoga in beautiful outdoor settings/i)).toBeInTheDocument()
  })
})
