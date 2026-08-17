import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { inquiryCta, inquiryText, inquiryTitle } from '../data'
import { InquiryCard } from './InquiryCard'

describe('InquiryCard', () => {
  it('renders the floating inquiry card with icon, headline, paragraph and CTA', () => {
    const { container } = render(<InquiryCard />)

    expect(screen.getByRole('heading', { level: 2, name: inquiryTitle })).toBeInTheDocument()
    expect(screen.getByText(inquiryText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: inquiryCta })).toHaveAttribute('href', '#contact')

    // Package icon in the left panel + ArrowRight on the CTA link.
    expect(container.querySelectorAll('svg')).toHaveLength(2)
    expect(container.querySelector('span[aria-hidden="true"]')).toBeInTheDocument()
  })
})
