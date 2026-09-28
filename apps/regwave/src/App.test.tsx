import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the registration form with both headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /INFOMATION/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /REGISTER FORM/i })).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Regwave — Membership Registration Form')
  })
})
