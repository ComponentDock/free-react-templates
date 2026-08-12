import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline, CTA link and cream background', () => {
    const { container } = render(<CtaBand />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "Let's work together to make your business growth dramatically.",
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Our Services' })).toBeInTheDocument()
    expect(container.firstElementChild).toHaveClass('bg-cream')
  })
})
