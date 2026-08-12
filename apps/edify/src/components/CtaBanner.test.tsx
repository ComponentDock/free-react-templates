import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA heading, paragraph, button, and image', () => {
    render(<CtaBanner />)

    expect(
      screen.getByRole('heading', {
        name: 'Take the next step toward your personal and professional goals with us.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join now for Free' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /next step/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
