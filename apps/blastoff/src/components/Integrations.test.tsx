import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Integrations } from './Integrations'

describe('Integrations', () => {
  it('shows the eyebrow, heading and subcopy', () => {
    render(<Integrations />)

    expect(screen.getByText('Integrations')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Works with your favorite tools' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Connect the tools you already use/)).toBeInTheDocument()
  })

  it('shows the eight connected tools with Connected badges', () => {
    render(<Integrations />)

    for (const tool of ['GitHub', 'GitLab', 'Slack', 'AWS', 'Vercel', 'Docker', 'Jira', 'Figma']) {
      expect(screen.getByText(tool)).toBeInTheDocument()
    }

    expect(screen.getAllByText('Connected')).toHaveLength(8)
  })
})
