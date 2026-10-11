import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CopyLine } from './CopyLine'

describe('CopyLine', () => {
  it('renders one centred 36px sentence with only the middle words bold', () => {
    const { container } = render(<CopyLine />)

    const line = screen.getByText(/Our website is/)

    expect(line.tagName).toBe('P')
    expect(line).toHaveClass(
      'pb-[60px]',
      'text-center',
      'font-sans',
      'text-[36px]',
      'leading-[1.333333]',
      'text-white',
    )
    expect(line.textContent).toBe('Our website is Coming Soon, follow us for update now!')

    const bold = container.querySelector('span')

    expect(bold).toHaveTextContent('Coming Soon')
    expect(bold).toHaveClass('font-bold')
    // an inline span, not a separate heading element
    expect(container.querySelector('h1')).toBeNull()
  })

  it('accepts a className override', () => {
    const { container } = render(<CopyLine className="pb-0" />)

    expect(container.firstElementChild).toHaveClass('pb-0')
  })
})
