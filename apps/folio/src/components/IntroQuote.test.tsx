import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroQuote } from './IntroQuote'

describe('IntroQuote', () => {
  it('renders play button and quote', () => {
    render(<IntroQuote />)
    expect(screen.getByRole('link', { name: /play introduction video/i })).toBeInTheDocument()
    expect(screen.getByText(/I'm a Writer Based in England/)).toBeInTheDocument()
  })
})
