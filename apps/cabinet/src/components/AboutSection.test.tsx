import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the manufacturer heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Manufacturer')
  })

  it('renders the description text', () => {
    render(<AboutSection />)
    expect(screen.getByText(/We build in our own workshop/)).toBeInTheDocument()
    expect(screen.getByText(/That is why a Cabinet sofa/)).toBeInTheDocument()
  })

  it('renders the discover more button', () => {
    render(<AboutSection />)
    expect(screen.getByText('Discover more')).toBeInTheDocument()
  })

  it('renders the workshop image', () => {
    render(<AboutSection />)
    const img = screen.getByRole('img', { name: /Cabinet workshop/ })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/cabinet-workshop/1200/800')
  })
})
