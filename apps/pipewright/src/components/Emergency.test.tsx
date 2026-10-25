import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Emergency } from './Emergency'
import { EMERGENCY, PHONE_HREF } from '../content'

describe('Emergency', () => {
  it('is a thin strip on the hero ground, not a padded band', () => {
    const { container } = render(<Emergency />)
    const strip = container.querySelector('section') as HTMLElement
    expect(strip).toHaveAttribute('id', 'emergency')
    expect(strip).toHaveAttribute('data-emergency')
    expect(strip).toHaveClass('bg-ink-50', 'text-ink-800')
    expect(strip.querySelector('.section')).toBeNull()
  })

  it('puts a ping twin over a solid core, both inheriting the strip colour', () => {
    const { container } = render(<Emergency />)
    const ping = container.querySelector('.animate-ping') as HTMLElement
    expect(ping).toHaveClass('absolute', 'opacity-60', 'bg-current', 'rounded-full')
    const core = ping.nextElementSibling as HTMLElement
    expect(core).toHaveClass('relative', 'h-2', 'w-2', 'bg-current')
  })

  it('carries the out-of-hours copy and the enlarged pill', () => {
    render(<Emergency />)
    expect(screen.getByText(EMERGENCY.label).closest('p')).toHaveClass(
      'text-sm',
      'font-semibold',
      'uppercase',
      'tracking-wide',
      'opacity-90',
    )
    expect(screen.getByText(EMERGENCY.line)).toHaveClass('mt-1', 'text-lg', 'font-bold')
    expect(screen.getByText(EMERGENCY.note)).toHaveClass('mt-2', 'text-sm', 'opacity-90')

    const pill = screen.getByRole('link', { name: EMERGENCY.cta })
    expect(pill).toHaveAttribute('href', PHONE_HREF)
    expect(pill).toHaveClass('px-6', 'py-3', 'text-lg', 'font-bold', 'shrink-0')
  })
})
