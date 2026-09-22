import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { name: /join our gym/i })).toBeInTheDocument()
  })

  it('renders four benefit items', () => {
    render(<CTA />)
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBe(4)
  })

  it('renders two call-to-action buttons', () => {
    render(<CTA />)
    const buttons = screen.getAllByRole('link', { name: /read more/i })
    expect(buttons.length).toBe(2)
  })

  it('renders the gym interior image', () => {
    render(<CTA />)
    expect(screen.getByRole('img', { name: /fitlane gym interior/i })).toBeInTheDocument()
  })
})
