import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders an orange heading with the 80×3px underline', () => {
    const { container } = render(
      <SectionHeading title="About Us" align="left" tone="primary" blurb={null} />,
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('About Us')
    expect(heading.className).toContain('text-primary')
    const underline = container.querySelector('.w-20')
    expect(underline?.className).toContain('h-[3px]')
    expect(underline?.className).toContain('bg-primary')
    expect(underline?.className).not.toContain('mx-auto')
  })

  it('renders a centered light heading for overlay sections', () => {
    const { container } = render(
      <SectionHeading title="How It Works" align="center" tone="white" blurb="Copy line" />,
    )
    expect(screen.getByRole('heading', { level: 2 }).className).toContain('text-white')
    const underline = container.querySelector('.w-20')
    expect(underline?.className).toContain('mx-auto')
    expect(screen.getByText('Copy line')).toBeInTheDocument()
  })
})
