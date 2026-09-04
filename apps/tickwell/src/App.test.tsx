import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #05')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Tickwell — Animated Checkmark Checkbox Template')
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Tickwell')).toBeInTheDocument()
  })

  it('renders checkbox options', () => {
    render(<App />)
    expect(screen.getByText('Enable Dark Mode')).toBeInTheDocument()
    expect(screen.getByText('Send Email Notifications')).toBeInTheDocument()
  })
})
