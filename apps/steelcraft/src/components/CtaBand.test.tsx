import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { cta } from '../data'

describe('CtaBand', () => {
  it('renders the heading, paragraph and Contact Us button', () => {
    render(<CtaBand />)
    expect(screen.getByRole('heading', { level: 2, name: cta.heading })).toBeInTheDocument()
    expect(screen.getByText(cta.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: cta.cta })).toBeInTheDocument()
  })

  it('anchors the button to the contact section', () => {
    render(<CtaBand />)
    expect(screen.getByRole('link', { name: cta.cta })).toHaveAttribute('href', '#contact')
  })

  it('uses the dark band with a brand-red top border', () => {
    render(<CtaBand />)
    const section = screen.getByRole('heading', { name: cta.heading }).closest('section')!
    expect(section).toHaveClass('bg-ink', 'border-t-[5px]', 'border-brand')
  })
})
