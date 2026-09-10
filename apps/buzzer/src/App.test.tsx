import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Buzzer — Business Consulting')
  })

  it('composes every section in the correct landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Entrepreneur\. Investor\. Marketing Extraordinaire/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Build trust fast/i })).toBeInTheDocument()
    expect(screen.getByText('How we can help?')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Meet with our amazing team/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Get started with our awesome service today/i,
      }),
    ).toBeInTheDocument()
  })
})
