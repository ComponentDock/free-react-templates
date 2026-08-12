import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapSection } from './MapSection'

describe('MapSection', () => {
  it('renders a lazy map iframe and the address card', () => {
    const { container } = render(<MapSection />)
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('loading', 'lazy')
    expect(screen.getByText('Main Str, no 23, NY, New York PK 23589')).toBeInTheDocument()
    expect(screen.getByText('+546 990221 123')).toBeInTheDocument()
    expect(screen.getByText('contact@industryalinc.com')).toBeInTheDocument()
  })
})
