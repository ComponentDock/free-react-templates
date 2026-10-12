import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('prints the dashed eyebrow above the script title', () => {
    render(<SectionHeading subheading="Planning" title="When & Where" />)

    const subheading = screen.getByText('Planning')

    expect(subheading).toHaveClass('border-dashed', 'border-brand', 'text-brand')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('When & Where')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('font-script')
  })
})
