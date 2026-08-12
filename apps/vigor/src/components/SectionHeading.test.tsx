import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the kicker and title', () => {
    render(<SectionHeading kicker="Vigor" title="Working Hours" />)

    expect(screen.getByText('Vigor')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Working Hours' })).toBeInTheDocument()
  })

  it('applies the light variant classes for photo backgrounds', () => {
    render(<SectionHeading kicker="Vigor" title="Ask the experts" light />)

    const heading = screen.getByRole('heading', { name: 'Ask the experts' })
    expect(heading.className).toContain('text-white')
  })
})
