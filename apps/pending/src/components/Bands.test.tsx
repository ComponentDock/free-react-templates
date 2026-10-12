import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BottomBar } from './BottomBar'
import { CentreBand } from './CentreBand'
import { TopBar } from './TopBar'
import { Attribution } from './Attribution'

describe('TopBar', () => {
  it('is a wrapping space-between row holding the mark, the countdown and the pill', () => {
    render(<TopBar />)

    const bar = screen.getByTestId('top-bar')

    expect(bar).toHaveClass('flex', 'w-full', 'flex-wrap', 'items-center', 'justify-between')
    expect(screen.getByTestId('brand-mark-wrap').parentElement).toBe(bar)
    expect(screen.getByTestId('countdown').parentElement).toBe(bar)
    expect(screen.getByTestId('cta-wrap').parentElement).toBe(bar)
  })

  it('carries the countdown in the top bar rather than the centre', () => {
    render(<TopBar />)

    expect(screen.getByTestId('top-bar')).toContainElement(screen.getByTestId('countdown'))
    expect(screen.queryByTestId('centre-band')).toBeNull()
  })

  it('accepts a className override', () => {
    render(<TopBar className="pt-0" />)

    expect(screen.getByTestId('top-bar')).toHaveClass('pt-0')
  })
})

describe('CentreBand', () => {
  it('centres the headline and the play control on both axes', () => {
    render(<CentreBand />)

    const band = screen.getByTestId('centre-band')

    expect(band).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'px-[15px]',
      'pt-[80px]',
      'pb-[90px]',
    )
    expect(band.firstElementChild).toBe(screen.getByTestId('heading'))
    expect(band).toContainElement(screen.getByTestId('play-button'))
    expect(band.querySelectorAll('[data-testid]')).toHaveLength(2)
  })

  it('accepts a className override', () => {
    render(<CentreBand className="pt-0" />)

    expect(screen.getByTestId('centre-band')).toHaveClass('pt-0')
  })
})

describe('BottomBar', () => {
  it('puts the social rings on the left and the e-mail capture on the right', () => {
    render(<BottomBar />)

    const bar = screen.getByTestId('bottom-bar')

    expect(bar).toHaveClass('flex', 'w-full', 'flex-wrap', 'items-center', 'justify-between')
    expect(screen.getByTestId('social-row').parentElement).toBe(bar)
    expect(screen.getByTestId('email-form').parentElement).toBe(bar)
    expect(bar.firstElementChild).toBe(screen.getByTestId('social-row'))
  })

  it('accepts a className override', () => {
    render(<BottomBar className="pb-0" />)

    expect(screen.getByTestId('bottom-bar')).toHaveClass('pb-0')
  })
})

describe('Attribution', () => {
  it('credits Component Dock in a small line pinned to the bottom of the column', () => {
    render(<Attribution />)

    const line = screen.getByTestId('attribution')

    expect(line).toHaveClass(
      'absolute',
      'bottom-[10px]',
      'left-1/2',
      '-translate-x-1/2',
      'text-center',
      'text-[12px]',
      'text-white/40',
    )
    expect(line).toHaveTextContent('More templates at Component Dock')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('accepts a className override', () => {
    render(<Attribution className="bottom-0" />)

    expect(screen.getByTestId('attribution')).toHaveClass('bottom-0')
  })
})
