import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Developers } from './Developers'

describe('Developers', () => {
  it('renders the heading, code window and four feature cards', () => {
    render(<Developers />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Built by Developers, for Developers' }),
    ).toBeInTheDocument()

    expect(screen.getByText('example.py')).toBeInTheDocument()
    expect(screen.getByLabelText('Python model example')).toBeInTheDocument()

    for (const title of [
      'SDKs in 8 Languages',
      'OpenAPI Spec',
      'Webhooks & Streaming',
      '99.99% Uptime SLA',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
