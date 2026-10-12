import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Monogram } from './Monogram'

describe('Monogram', () => {
  it('renders the app own white wordmark on a block lockup', () => {
    render(<Monogram />)

    const lockup = screen.getByTestId('monogram')

    expect(lockup.tagName).toBe('DIV')
    expect(lockup).toHaveClass('block', 'grow')
    const mark = screen.getByRole('img', { name: 'Foretaste' })
    expect(mark).toHaveClass('h-11', 'w-auto', 'max-w-full')
    expect(mark).toHaveTextContent('FT')
  })

  it('is not a link and carries no href', () => {
    render(<Monogram />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('accepts layout overrides', () => {
    render(<Monogram className="self-center" />)

    expect(screen.getByTestId('monogram')).toHaveClass('self-center')
  })
})
