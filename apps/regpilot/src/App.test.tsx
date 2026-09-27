import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the registration form, background, and footer, and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Regpilot — Registration Form')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /registration form/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('form', { name: /registration form/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
