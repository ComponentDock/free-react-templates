import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressShowcase } from './ProgressShowcase'

describe('ProgressShowcase', () => {
  it('renders the five percentage bars and the labelled skill bars', () => {
    const { container } = render(<ProgressShowcase />)

    expect(container.querySelector('section')!.id).toBe('progressbar')
    expect(screen.getByRole('heading', { level: 2, name: 'Progress bars' })).toBeInTheDocument()

    const widths = Array.from(container.querySelectorAll<HTMLElement>('[style*="width"]')).map(
      (bar) => bar.style.width,
    )
    expect(widths).toEqual(['60%', '90%', '70%', '50%', '40%', '60%', '80%', '95%'])

    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getAllByText('WordPress')).toHaveLength(2)
    expect(screen.getAllByText('60%')).toHaveLength(2)
  })
})
