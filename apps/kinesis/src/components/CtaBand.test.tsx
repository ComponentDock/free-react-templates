import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the eyebrow, heading and red CTA button', () => {
    render(<CtaBand />)
    expect(screen.getByText('Join Us Now')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Join Us Our Free Workout Training/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Join Now/ })).toBeInTheDocument()
  })
})
