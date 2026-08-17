import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapSection } from './MapSection'

describe('MapSection', () => {
  it('renders a full-width map embed with an accessible label', () => {
    render(<MapSection />)

    const frame = screen.getByTitle('Map of the event location')
    expect(frame).toBeInTheDocument()
    expect(frame.tagName).toBe('IFRAME')
    expect(frame).toHaveAttribute('src', expect.stringContaining('google.com/maps'))
  })
})
