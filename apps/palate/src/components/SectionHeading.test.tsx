import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the title and the aria-hidden script word', () => {
    const { container } = render(<SectionHeading script="Services" title="Catering Services" />)

    expect(screen.getByRole('heading', { level: 2, name: 'Catering Services' })).toBeInTheDocument()

    const script = container.querySelector('.font-script')!
    expect(script).toHaveTextContent('Services')
    expect(script).toHaveAttribute('aria-hidden', 'true')
    expect(script.className).toContain('text-[100px]')
    expect(script.className).toContain('text-brand')

    // Script floats above the heading (absolute, negative top).
    expect(script.className).toContain('absolute')
    expect(script.className).toContain('top-[-45px]')
  })
})
