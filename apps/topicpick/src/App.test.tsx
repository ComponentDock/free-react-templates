import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /topic selector/i })).toBeInTheDocument()
  })

  it('renders the Select Topics label', () => {
    render(<App />)
    expect(screen.getByText('Select Topics')).toBeInTheDocument()
  })

  it('renders the dropdown trigger', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows selecting and deselecting topics', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: /^topic 1$/i }))
    expect(screen.getByRole('button', { name: /1 item selected/i })).toBeInTheDocument()
    await user.click(screen.getByRole('option', { name: /^topic 1$/i }))
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Topicpick — Multiselect Topic Selector Template')
  })
})
