import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DownloadApp } from './DownloadApp'

describe('DownloadApp', () => {
  it('renders heading, App Store and Play Store buttons', () => {
    render(<DownloadApp />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Download app/)
    expect(screen.getByText('Available')).toBeInTheDocument()
    expect(screen.getByText('on App Store')).toBeInTheDocument()
    expect(screen.getByText('Download')).toBeInTheDocument()
    expect(screen.getByText('from Play Store')).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    const storeLinks = links.filter(
      (l) => l.textContent?.includes('App Store') || l.textContent?.includes('Play Store'),
    )
    expect(storeLinks).toHaveLength(2)
  })
})
