import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'

describe('ComingSoon', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('paints one full-viewport photo screen under the brand wash', () => {
    const { container } = render(<ComingSoon />)

    const wrapper = container.firstElementChild

    expect(wrapper).toHaveClass(
      'relative',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-col',
      'pt-[24px]',
      'bg-wash',
      'bg-cover',
      'bg-center',
      'bg-no-repeat',
    )
    expect(wrapper).not.toHaveClass('px-[15px]')
    expect(wrapper).not.toHaveClass('pb-[30px]')
    expect(wrapper?.getAttribute('style')).toContain(
      'https://picsum.photos/seed/airborne-bg/1900/900',
    )

    const overlay = wrapper?.children[0]

    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveClass('absolute', 'inset-0', 'opacity-80')
    expect(overlay?.className).toContain('linear-gradient(to_bottom')

    expect(wrapper?.children[1]?.tagName).toBe('HEADER')
  })

  it('stacks the top bar over the two-column band and nothing else', () => {
    const { container } = render(<ComingSoon />)

    const wrapper = container.firstElementChild

    expect(wrapper?.children).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Airborne' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coming Soon')
    expect(screen.getAllByTestId(/^flip-card-[a-z]+-\d$/)).toHaveLength(8)
    expect(screen.getByRole('heading', { level: 2, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(container.querySelector('footer')).toBeNull()
  })

  it('accepts a className override on the wrapper', () => {
    const { container } = render(<ComingSoon className="selection:bg-white" />)

    expect(container.firstElementChild).toHaveClass('selection:bg-white')
  })
})
