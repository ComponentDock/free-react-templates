import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cortex — AI Agent Platform Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Build Autonomous AI Agents/i,
    )
    expect(
      screen.getByRole('heading', { name: /Everything You Need to Build AI Agents/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Trusted by AI Teams Everywhere/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Talk to Our Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Ready to Build Your First Agent/i }),
    ).toBeInTheDocument()
  })
})
