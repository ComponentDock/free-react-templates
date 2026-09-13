import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCta } from './ContactCta'

describe('ContactCta', () => {
  it('renders social links for Twitter, Facebook, Google and Instagram', () => {
    render(<ContactCta />)
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Google/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
  })
})
