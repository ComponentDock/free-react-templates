import { render, screen } from '@testing-library/react'
import { MobileAppCta } from './MobileAppCta'

describe('MobileAppCta', () => {
  it('renders heading', () => {
    render(<MobileAppCta />)
    expect(screen.getByText('Get The Mobile Apps')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<MobileAppCta />)
    expect(screen.getByText(/Search and apply for jobs/)).toBeInTheDocument()
  })

  it('renders App Store button', () => {
    render(<MobileAppCta />)
    expect(screen.getByText('App Store')).toBeInTheDocument()
  })

  it('renders Google Play button', () => {
    render(<MobileAppCta />)
    expect(screen.getByText('Google Play')).toBeInTheDocument()
  })
})
