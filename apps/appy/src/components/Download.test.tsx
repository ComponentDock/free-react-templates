import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Download } from './Download'

describe('Download', () => {
  it('renders the heading, blurb, and store buttons', () => {
    render(<Download />)

    expect(screen.getByRole('heading', { level: 2, name: 'Download The App' })).toBeInTheDocument()

    expect(
      screen.getByText(/Get Appy on your favorite store and start building today/),
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
