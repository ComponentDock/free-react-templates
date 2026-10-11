import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressShowcase } from './ProgressShowcase'

describe('ProgressShowcase', () => {
  it('renders the four contextual bars and the labelled skill bars', () => {
    const { container } = render(<ProgressShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Progress Bar')

    const widths = Array.from(container.querySelectorAll<HTMLElement>('[style*="width"]')).map(
      (bar) => bar.style.width,
    )
    expect(widths).toEqual(['25%', '50%', '75%', '100%', '94%', '85%', '70%'])

    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('UI Design')).toBeInTheDocument()
    expect(screen.getByText('94%')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()

    const first = container.querySelector<HTMLElement>('[style*="width"]')!
    expect(first.className).toContain('bg-kit-success')
    expect(first.parentElement!.className).toContain('h-[7px]')
  })
})
