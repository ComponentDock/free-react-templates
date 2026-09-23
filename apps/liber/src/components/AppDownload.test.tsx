import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppDownload } from './AppDownload'

describe('AppDownload', () => {
  it('renders the heading and store links', () => {
    render(<AppDownload />)
    expect(screen.getByText(/Download Our App/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /App Store/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Play Store/i })).toBeInTheDocument()
  })
})
