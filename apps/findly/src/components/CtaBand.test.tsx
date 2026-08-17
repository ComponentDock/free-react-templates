import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'
import { CTA } from '../data'

describe('CtaBand', () => {
  it('renders the heading, listing count, and Explore More pill', () => {
    render(<CtaBand />)
    expect(screen.getByRole('heading', { level: 2, name: CTA.heading })).toBeInTheDocument()
    expect(screen.getByText(CTA.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CTA.action })).toBeInTheDocument()
  })
})
