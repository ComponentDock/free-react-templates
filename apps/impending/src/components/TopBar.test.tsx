import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('carries the page rhythm in its own bottom padding, mark left and pill right', () => {
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
      'pb-[185px]',
      'pl-[65px]',
      'max-[576px]:px-[15px]',
      'max-[768px]:pb-[60px]',
    )
    expect(bar.children).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Impending' })).toBeInTheDocument()
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
