import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingCta } from './ClosingCta'

describe('ClosingCta', () => {
  it('renders the heading, the line of copy and two well-formed in-page links', () => {
    const { container } = render(<ClosingCta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Start with one circle' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Most people begin with the group chat they wish had somewhere better to live.',
      ),
    ).toBeInTheDocument()

    const primary = screen.getByRole('link', { name: /Create your circle/ })
    const outline = screen.getByRole('link', { name: 'Read the privacy defaults' })
    expect(primary).toHaveAttribute('href', '#pricing')
    expect(primary).toHaveClass('bg-white', 'text-primary-700')
    expect(outline).toHaveAttribute('href', '#privacy')
    expect(outline).toHaveClass('border-2', 'border-white/30')

    const dotGrid = container.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(dotGrid.style.backgroundImage).toContain('radial-gradient')
  })
})
