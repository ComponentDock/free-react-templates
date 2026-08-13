import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DownloadCta } from './DownloadCta'

describe('DownloadCta', () => {
  it('renders the heading, paragraph, store buttons and footnote', () => {
    render(<DownloadCta />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Download Anywhere')
    expect(
      screen.getByText(/Available for all major mobile and desktop platforms/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'App Store' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Google Play' })).toHaveAttribute('href', '#contact')
    expect(screen.getByText('*Works on iOS 10.0.5+, Android Kitkat and above.')).toBeInTheDocument()
  })
})
