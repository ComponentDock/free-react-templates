import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppSection from './AppSection'

describe('AppSection', () => {
  it('renders heading', () => {
    render(<AppSection />)
    expect(screen.getByText('Get Your Music Right Now!')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<AppSection />)
    expect(screen.getByText(/Download the app/)).toBeInTheDocument()
  })

  it('renders app preview image', () => {
    render(<AppSection />)
    expect(screen.getByAltText('App preview')).toBeInTheDocument()
  })

  it('renders App Store link', () => {
    render(<AppSection />)
    expect(screen.getByLabelText('Download on App Store')).toBeInTheDocument()
  })

  it('renders Google Play link', () => {
    render(<AppSection />)
    expect(screen.getByLabelText('Get it on Google Play')).toBeInTheDocument()
  })
})
