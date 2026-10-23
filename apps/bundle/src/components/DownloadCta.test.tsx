import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DownloadCta } from './DownloadCta'

describe('DownloadCta', () => {
  it('renders the download heading and store links', () => {
    render(<DownloadCta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Download This App Today!' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/one video game lover in your neighbor/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Available on App Store' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Available on Google Play' })).toBeInTheDocument()
  })
})
