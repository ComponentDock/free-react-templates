import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading and the four steps with blurbs', () => {
    render(<HowItWorks />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'How The App Works?' }),
    ).toBeInTheDocument()

    for (const step of ['Sign Up', 'Create', 'Compose', 'Send']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
  })
})
