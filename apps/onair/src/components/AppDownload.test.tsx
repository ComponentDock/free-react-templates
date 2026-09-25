import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppDownload } from './AppDownload'

describe('AppDownload', () => {
  it('renders the Radio Music heading', () => {
    render(<AppDownload />)
    expect(screen.getByRole('heading', { level: 2, name: /Radio Music/ })).toBeInTheDocument()
  })

  it('renders the download description text', () => {
    render(<AppDownload />)
    expect(screen.getByText(/Radio app plus is an app/)).toBeInTheDocument()
  })

  it('renders Google Play and App Store buttons', () => {
    render(<AppDownload />)
    expect(screen.getByRole('link', { name: /Google Play/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /App Store/ })).toBeInTheDocument()
  })
})
