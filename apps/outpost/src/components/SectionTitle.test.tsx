import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the gradient eyebrow, serif headline and grey rule', () => {
    const { container } = render(<SectionTitle eyebrow="Eyebrow copy" title="Section Headline" />)

    const eyebrow = screen.getByText('Eyebrow copy')
    expect(eyebrow).toHaveClass('brand-gradient-text', 'uppercase')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Section Headline')
    expect(heading).toHaveClass('font-display', 'lg:text-[48px]')

    expect(container.querySelector('span[aria-hidden="true"]')).toHaveClass('bg-titlebar')
  })
})
