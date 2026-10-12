import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('pins the mark left and the pill right with only a 22px top padding', () => {
    render(<TopBar />)

    const bar = screen.getByTestId('top-bar')

    expect(bar.tagName).toBe('HEADER')
    expect(bar).toHaveClass(
      'flex',
      'w-full',
      'flex-wrap',
      'items-center',
      'justify-between',
      'pt-[22px]',
      'pr-[80px]',
      'pl-[80px]',
      'max-[576px]:px-[15px]',
    )
    // no bottom padding: the band's height comes from its children
    expect(bar.className).not.toContain('pb-')
    expect(bar.children).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Oncoming' })).toBeInTheDocument()
    expect(screen.getByTestId('sign-up')).toBeInTheDocument()
    expect(screen.getByTestId('sign-up').parentElement).toHaveClass(
      'flex',
      'flex-wrap',
      'my-[10px]',
    )
  })

  it('accepts layout overrides', () => {
    render(<TopBar className="pt-0" />)

    expect(screen.getByTestId('top-bar')).toHaveClass('pt-0')
  })
})
