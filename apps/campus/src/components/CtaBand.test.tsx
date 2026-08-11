import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { ctaHeading, ctaLabel, seeMoreLabel } from '../data'

describe('CtaBand', () => {
  it('renders the heading and See More button', () => {
    render(<CtaBand />)

    expect(screen.getByRole('region', { name: ctaLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: ctaHeading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: seeMoreLabel })).toBeInTheDocument()
  })
})
