import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaIntro } from './CtaIntro'

describe('CtaIntro', () => {
  it('renders heading and description', () => {
    render(<CtaIntro />)
    expect(screen.getByText('Ready to get started')).toBeInTheDocument()
    expect(screen.getByText(/safe to book online/)).toBeInTheDocument()
  })

  it('renders Book now and Contact us buttons', () => {
    render(<CtaIntro />)
    expect(screen.getByText('Book now')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })
})
