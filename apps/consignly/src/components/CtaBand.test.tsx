import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { CTA } from '../data'

describe('CtaBand', () => {
  it('renders the heading, copy, and Get started button', () => {
    render(<CtaBand />)
    expect(screen.getByRole('region', { name: 'Call to action' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: CTA.heading })).toBeInTheDocument()
    expect(screen.getByText(CTA.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CTA.buttonLabel })).toHaveAttribute('href', '#about')
  })

  it('applies the background image inline', () => {
    const { container } = render(<CtaBand />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain(CTA.image)
  })
})
