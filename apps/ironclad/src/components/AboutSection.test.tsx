import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the welcome heading', () => {
    render(<AboutSection />)
    expect(screen.getByText('Welcome to Ironclad')).toBeInTheDocument()
  })

  it('renders the company heading', () => {
    render(<AboutSection />)
    expect(screen.getByText('Ironclad A Construction Company')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<AboutSection />)
    expect(screen.getByText(/far from the countries Vokalia/i)).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<AboutSection />)
    expect(screen.getByLabelText('Watch our video')).toBeInTheDocument()
  })
})
