import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTAIntro } from './CTAIntro'

describe('CTAIntro', () => {
  it('renders heading and CTA button', () => {
    render(<CTAIntro />)
    expect(screen.getByText(/We Provide Free Health Care Consultation/)).toBeInTheDocument()
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<CTAIntro />)
    expect(screen.getByText(/Your Health is Our Top Priority/)).toBeInTheDocument()
  })
})
