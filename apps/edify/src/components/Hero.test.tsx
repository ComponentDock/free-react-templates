import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext, CTA, and illustration', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Online learning platform')
    expect(
      screen.getByText(/Build skills with courses, certificates, and degrees online/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join for Free' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /student learning/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
