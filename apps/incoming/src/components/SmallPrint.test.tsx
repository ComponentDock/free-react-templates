import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SmallPrint } from './SmallPrint'

describe('SmallPrint', () => {
  it('renders the no-spam line with the underlined word', () => {
    const { container } = render(<SmallPrint />)

    const line = container.firstElementChild
    expect(line).toHaveClass('pt-[10px]', 'text-center', 'text-muted', 'text-[14px]')
    expect(line).toHaveTextContent('I promise to never spam')
    expect(screen.getByText('never')).toHaveClass('border-b', 'border-muted')
  })

  it('accepts a className override', () => {
    const { container } = render(<SmallPrint className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
