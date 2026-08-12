import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('shows the subheading, headline, paragraphs and founder card', () => {
    const { container } = render(<Welcome />)

    expect(screen.getByText('Welcome to Enamel')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Medical specialty concerned with the care of acutely ill hospitalized patients',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Dr. Paul Foster')).toBeInTheDocument()
    expect(screen.getByText('CEO, Founder')).toBeInTheDocument()
    // Clinic photo + decorative circular founder portrait.
    expect(container.querySelectorAll('img')).toHaveLength(2)
    expect(container.querySelector('img')).toHaveAttribute('alt', 'Modern dental clinic building')
  })
})
