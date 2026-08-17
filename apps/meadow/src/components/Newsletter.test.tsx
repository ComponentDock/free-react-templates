import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Newsletter } from './Newsletter'
import { newsletterCta, newsletterEyebrow, newsletterTitle } from '../data'

describe('Newsletter', () => {
  it('shows the Newsletter eyebrow and Subscribe for Newsletter heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(newsletterEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
  })

  it('renders the white Subscribe now! button with green text', () => {
    render(<Newsletter />)
    expect(screen.getByRole('link', { name: newsletterCta })).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: newsletterCta })).toHaveClass('text-brand')
  })
})
