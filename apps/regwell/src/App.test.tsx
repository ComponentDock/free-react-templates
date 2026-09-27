import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the appointment form, background, and footer, and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Regwell — Education Appointment Form')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /education appointment form/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('form', { name: /education appointment form/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
