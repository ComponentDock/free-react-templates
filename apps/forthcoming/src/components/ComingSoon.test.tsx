import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'

describe('ComingSoon', () => {
  it('renders one double-washed viewport screen with a single 790px column', () => {
    const { container } = render(<ComingSoon />)

    const shell = container.firstElementChild as HTMLElement

    expect(shell).toHaveClass(
      'relative',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-wrap',
      'items-center',
      'justify-center',
      'px-[15px]',
      'py-[55px]',
      'bg-wash-top',
      'bg-cover',
      'bg-center',
      'bg-no-repeat',
    )
    expect(shell.getAttribute('style')).toContain(
      'https://picsum.photos/seed/forthcoming-bg/1900/900',
    )

    const column = screen.getByTestId('wash-layer').parentElement?.lastElementChild

    expect(column).toHaveClass('relative', 'w-[790px]', 'max-w-full')
    expect(column).toContainElement(screen.getByTestId('glyph'))
    expect(column).toContainElement(screen.getByTestId('countdown'))
    expect(column).toContainElement(screen.getByTestId('notify-form'))
  })

  it('stacks a 90% wash layer and a 20% scrim layer over the photograph', () => {
    render(<ComingSoon />)

    const wash = screen.getByTestId('wash-layer')
    const scrim = screen.getByTestId('scrim-layer')

    expect(wash).toHaveClass(
      'absolute',
      'inset-0',
      'bg-[linear-gradient(to_top,var(--color-wash-bottom),var(--color-wash-top))]',
      'opacity-90',
    )
    expect(scrim).toHaveClass('absolute', 'inset-0', 'bg-scrim')
    expect(wash).toHaveAttribute('aria-hidden', 'true')
    expect(scrim).toHaveAttribute('aria-hidden', 'true')
    expect(wash.compareDocumentPosition(scrim)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })

  it('has no navbar, no social row and no footer band', () => {
    render(<ComingSoon />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
  })

  it('accepts a className override', () => {
    const { container } = render(<ComingSoon className="py-0" />)

    expect(container.firstElementChild).toHaveClass('py-0')
  })
})
