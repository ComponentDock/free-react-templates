import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHead } from '../components/SectionHead'

describe('SectionHead', () => {
  it('renders the pill, heading and lede centred by default', () => {
    render(<SectionHead eyebrow="Channels" title="A heading" lede="A lede" />)

    expect(screen.getByText('Channels')).toHaveClass('bg-primary-50', 'text-xs')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('A heading')
    expect(screen.getByText('A lede')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).parentElement).toHaveClass('text-center')
  })

  it('supports the rose pill, the looser eyebrow and left alignment', () => {
    render(
      <SectionHead
        eyebrow="Live now"
        title="Threads"
        lede="Read them"
        tone="accent"
        size="sm"
        align="left"
        className="wrapped"
      />,
    )

    expect(screen.getByText('Live now')).toHaveClass('bg-accent-50', 'text-sm')
    expect(screen.getByText('Live now').parentElement).toHaveClass('wrapped')
    expect(screen.getByRole('heading', { level: 2 }).parentElement).not.toHaveClass('text-center')
  })
})
