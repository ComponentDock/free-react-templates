import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DownloadCta } from './DownloadCta'

describe('DownloadCta', () => {
  it('renders the heading and a download button', () => {
    render(<DownloadCta />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Our App Available For Any Device Download now',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download App' })).toHaveAttribute('href', '#download')
  })
})
