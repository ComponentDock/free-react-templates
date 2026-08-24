import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Integrations } from './Integrations'

describe('Integrations', () => {
  it('renders the section heading', () => {
    render(<Integrations />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Integrates With Your Favorite Tools',
    )
  })

  it('renders the subheading', () => {
    render(<Integrations />)
    expect(screen.getByText(/Connect Spark with the tools/i)).toBeInTheDocument()
  })

  it('renders all eight integration tools', () => {
    render(<Integrations />)
    const tools = ['Slack', 'GitHub', 'Stripe', 'Figma', 'Notion', 'Zapier', 'Google', 'Trello']
    for (const tool of tools) {
      expect(screen.getByText(tool)).toBeInTheDocument()
    }
  })

  it('renders the Contact Us button', () => {
    render(<Integrations />)
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
