import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Integrations } from './Integrations'

describe('Integrations', () => {
  it('renders the heading and the tool logo grid', () => {
    render(<Integrations />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Integrates With Your Favorite Tools' }),
    ).toBeInTheDocument()

    for (const tool of ['Slack', 'Trello', 'Dropbox', 'GitHub', 'Figma', 'Notion']) {
      expect(screen.getByText(tool)).toBeInTheDocument()
    }
  })
})
