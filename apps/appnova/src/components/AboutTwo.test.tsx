import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutTwo } from './AboutTwo'

describe('AboutTwo', () => {
  it('renders the heading, blurb, store buttons, and phone image', () => {
    render(<AboutTwo />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Download Appnova Today' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Get the full Appnova experience/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download on the App Store' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get it on Google Play' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Appnova app on phone screen' })).toBeInTheDocument()
  })
})
