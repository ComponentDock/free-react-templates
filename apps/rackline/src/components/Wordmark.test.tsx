import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the name as readable text next to a decorative tile', () => {
    const { container } = render(<Wordmark />)

    expect(screen.getByText('Rackline')).toBeInTheDocument()
    const tile = container.querySelector('[aria-hidden="true"]')
    expect(tile).not.toBeNull()
    expect(container.firstElementChild).toHaveClass('inline-flex')
  })

  it('merges an extra class onto the wrapper', () => {
    const { container } = render(<Wordmark className="text-[24px]" />)

    expect(container.firstElementChild).toHaveClass('text-[24px]', 'items-center')
  })
})
