import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the photo, heading, paragraphs, signature, and button', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'about me' })).toBeInTheDocument()
    expect(screen.getByText(/spent over eight years coaching/)).toBeInTheDocument()
    expect(screen.getByText(/discipline you can keep/)).toBeInTheDocument()
    expect(screen.getByText('Phill Vault')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'more about me' })).toBeInTheDocument()

    const photo = screen.getByRole('img', { name: /trainer/i })
    expect(photo).toHaveAttribute('src', expect.stringContaining('ironvault-about'))
  })
})
