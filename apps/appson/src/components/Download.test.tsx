import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Download } from './Download'

describe('Download', () => {
  it('renders the heading, blurb, and store buttons', () => {
    render(<Download />)

    expect(screen.getByRole('heading', { level: 2, name: 'Download Appson' })).toBeInTheDocument()

    expect(
      screen.getByText(/Available for iOS and Android, ready when you are/),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Available on App Store' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'Available on Play Store' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
