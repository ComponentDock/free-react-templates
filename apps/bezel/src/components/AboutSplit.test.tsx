import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders image and text side by side', () => {
    render(<AboutSplit />)
    expect(screen.getByAltText('About our smartwatches')).toBeInTheDocument()
    expect(screen.getByText(/Globally Connected/)).toBeInTheDocument()
    expect(screen.getByText(/by Large Network/)).toBeInTheDocument()
  })

  it('CTA button is focusable', () => {
    render(<AboutSplit />)
    const cta = screen.getByRole('link', { name: 'Get Details' })
    expect(cta).toBeInTheDocument()
    cta.focus()
    expect(cta).toHaveFocus()
  })
})
