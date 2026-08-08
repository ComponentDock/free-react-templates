import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the heading, two paragraphs, and a building photo', () => {
    render(<Welcome />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome to Medora Clinic' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/long-standing relationship based on trust/i)).toBeInTheDocument()
    expect(
      screen.getByText(/modern facilities combine experienced specialists/i),
    ).toBeInTheDocument()
    expect(screen.getByAltText('Medora Clinic building')).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/medora-clinic'),
    )
  })
})
