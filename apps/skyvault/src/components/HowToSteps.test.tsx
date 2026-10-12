import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowToSteps } from './HowToSteps'

describe('HowToSteps', () => {
  it('renders the compressed title over three circular badges', () => {
    render(<HowToSteps />)

    const section = document.getElementById('start')!
    expect(section).toHaveClass('bg-surface', 'pt-[96px]', 'pb-[97px]', 'scroll-mt-[124px]')

    const title = screen.getByRole('heading', { level: 2, name: 'Up and running in three steps' })
    expect(title).toHaveClass('text-[36px]', 'leading-[0.75]')

    for (const step of ['Claim your domain', 'Pick a hosting plan', 'Publish your site']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
  })

  it('carries the mint middle badge and the hazed outer badges with their halos', () => {
    const { container } = render(<HowToSteps />)

    const badges = Array.from(container.querySelectorAll('.h-\\[143px\\]'))
    expect(badges).toHaveLength(3)
    expect(badges[0]).toHaveClass('bg-haze', 'rounded-full')
    expect(badges[1]).toHaveClass('bg-mint')
    expect(badges[2]).toHaveClass('bg-haze')

    const halos = Array.from(container.querySelectorAll('span.-inset-\\[22px\\]'))
    expect(halos).toHaveLength(3)
    expect(halos[1]).toHaveClass('bg-[rgba(27,239,197,.25)]')
    expect(halos[0]).toHaveClass('bg-[rgba(213,223,227,.25)]')
  })

  it('hides the dotted arc below the desktop breakpoint', () => {
    const { container } = render(<HowToSteps />)

    const arc = container.querySelector('svg[viewBox="0 0 520 200"]')!
    expect(arc).toHaveAttribute('aria-hidden', 'true')
    expect(arc).toHaveClass('hidden', 'min-[992px]:block', 'top-[-137px]')
    expect(arc.querySelector('path')).toHaveAttribute('stroke-dasharray', '2 12')
  })

  it('closes the row with the violet price pill', () => {
    render(<HowToSteps />)

    const pill = screen.getByRole('link', { name: 'Plans from $9.90 a month' })
    expect(pill).toHaveAttribute('href', '#plans')
    expect(pill).toHaveClass('bg-plum-mid', 'h-[63px]', 'w-[257px]', 'rounded-[12px]')
  })
})
