import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, contact details, and the used-worldwide band', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Get in touch, send us an e-mail or call us',
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'hello@violet.app' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 (555) 013-2026' })).toBeInTheDocument()

    expect(screen.getByLabelText('Used worldwide')).toBeInTheDocument()
    for (const pin of ['New York', 'London', 'Dubai', 'Singapore']) {
      expect(screen.getByText(pin)).toBeInTheDocument()
    }
  })
})
