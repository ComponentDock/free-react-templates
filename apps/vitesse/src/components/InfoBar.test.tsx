import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoBar } from './InfoBar'

describe('InfoBar', () => {
  it('renders the light info bar with three orange-icon items', () => {
    const { container } = render(<InfoBar />)
    expect(container.firstElementChild).toHaveClass('bg-infobg')
    expect(screen.getByText('Call Us Anytime')).toBeInTheDocument()
    expect(screen.getByText('+1 555-010-0142')).toBeInTheDocument()
    expect(screen.getByText('Sunday CLOSED')).toBeInTheDocument()
    expect(screen.getByText('Mon - Sat 8.00 - 18.00')).toBeInTheDocument()
    expect(screen.getByText('1200 Example Harbor Road')).toBeInTheDocument()
    expect(screen.getByText('Newark, NJ 07114')).toBeInTheDocument()
  })

  it('labels each item with a label span over a value paragraph', () => {
    render(<InfoBar />)
    expect(screen.getByText('Call Us Anytime').tagName).toBe('SPAN')
    expect(screen.getByText('+1 555-010-0142').tagName).toBe('P')
  })
})
