import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BodyBand } from './BodyBand'

describe('BodyBand', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('spreads the copy column and the newsletter card inside the wide right inset', () => {
    const { container } = render(<BodyBand />)

    const band = container.firstElementChild

    expect(band).toHaveClass(
      'relative',
      'flex',
      'w-full',
      'flex-wrap',
      'justify-around',
      'pr-[200px]',
      'max-[1400px]:p-[15px]',
      'max-[1200px]:flex-col',
      'max-[1200px]:items-center',
    )
    expect(band?.children).toHaveLength(2)
    expect(screen.getByText('Our website is')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Newsletter' })).toBeInTheDocument()
  })

  it('accepts a className override', () => {
    const { container } = render(<BodyBand className="gap-4" />)

    expect(container.firstElementChild).toHaveClass('gap-4')
  })
})
