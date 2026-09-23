import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NewsletterCta } from './NewsletterCta'

describe('NewsletterCta', () => {
  it('renders heading and contact buttons', () => {
    render(<NewsletterCta />)
    expect(screen.getByRole('heading', { name: /need legal adviser/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /0-1230-456-7890/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youremail@email.com/i })).toBeInTheDocument()
  })
})
