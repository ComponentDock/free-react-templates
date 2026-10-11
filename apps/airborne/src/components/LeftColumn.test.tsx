import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LeftColumn } from './LeftColumn'

describe('LeftColumn', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('stacks the eyebrow, headline and countdown in the padded column', () => {
    const { container } = render(<LeftColumn />)

    const column = container.firstElementChild

    expect(column).toHaveClass(
      'flex',
      'flex-col',
      'pt-[34px]',
      'pb-[60px]',
      'max-[1200px]:items-center',
    )
    expect(column?.children).toHaveLength(3)

    expect(screen.getByText('Our website is')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coming Soon')
    expect(screen.getByTestId('flip-clock')).toBeInTheDocument()
  })

  it('accepts a className override', () => {
    const { container } = render(<LeftColumn className="w-full" />)

    expect(container.firstElementChild).toHaveClass('w-full')
  })
})
