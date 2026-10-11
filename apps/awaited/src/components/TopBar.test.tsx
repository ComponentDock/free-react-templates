import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('spreads the wordmark and the pill across a full-width bar', () => {
    render(<TopBar />)

    const bar = screen.getByTestId('top-bar')

    expect(bar.tagName).toBe('HEADER')
    expect(bar).toHaveClass(
      'flex',
      'w-full',
      'flex-wrap',
      'items-center',
      'justify-between',
      'px-[80px]',
      'pt-[22px]',
      'max-[576px]:px-[15px]',
    )
    expect(bar.children).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Awaited' })).toBeInTheDocument()
    expect(screen.getByTestId('sign-up')).toBeInTheDocument()
    expect(screen.getByTestId('sign-up').parentElement).toHaveClass(
      'flex',
      'flex-wrap',
      'my-[10px]',
    )
  })

  it('accepts layout overrides', () => {
    render(<TopBar className="pb-[10px]" />)

    expect(screen.getByTestId('top-bar')).toHaveClass('pb-[10px]')
  })
})
