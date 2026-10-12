import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialRow } from './SocialRow'
import type { SocialLink } from './SocialIcon'

describe('SocialRow', () => {
  it('rings three 36×36 translucent circles with 3px margins on the left', () => {
    render(<SocialRow />)

    expect(screen.getByTestId('social-row')).toHaveClass('flex', 'flex-wrap', 'items-center')

    for (const name of ['Facebook', 'Twitter', 'YouTube']) {
      const link = screen.getByRole('link', { name })

      expect(link).toHaveClass(
        'size-9',
        'rounded-full',
        'border',
        'border-white/10',
        'bg-transparent',
        'text-muted',
        'm-[3px]',
        'transition-all',
        'duration-[400ms]',
        'hover:bg-white',
        'hover:text-hover-ink',
      )
      expect(link.querySelector('svg')).toBeInTheDocument()
      expect(link.querySelector('svg')).toHaveAttribute('viewBox', '0 0 24 24')
    }
  })

  it('never fills a ring at rest', () => {
    render(<SocialRow />)

    for (const name of ['Facebook', 'Twitter', 'YouTube']) {
      expect(screen.getByRole('link', { name })).not.toHaveClass('bg-white')
    }
  })

  it('renders whatever marks it is handed', () => {
    const links: readonly SocialLink[] = [{ label: 'LinkedIn', href: '#team', Icon: Marker }]

    render(<SocialRow links={links} />)

    const link = screen.getByRole('link', { name: 'LinkedIn' })

    expect(link).toHaveAttribute('href', '#team')
    expect(screen.queryByRole('link', { name: 'Facebook' })).toBeNull()
  })

  it('accepts a className override', () => {
    render(<SocialRow className="my-0" />)

    expect(screen.getByTestId('social-row')).toHaveClass('my-0')
  })
})

function Marker() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" />
}
