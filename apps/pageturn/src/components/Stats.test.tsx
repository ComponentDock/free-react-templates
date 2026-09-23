import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders 4 stat cards with labels', () => {
    render(<Stats />)

    expect(screen.getByText('Copies Sold')).toBeInTheDocument()
    expect(screen.getByText('Copies Released')).toBeInTheDocument()
    expect(screen.getByText('Cup Of Coffee')).toBeInTheDocument()
    expect(screen.getByText('Happy Readers')).toBeInTheDocument()
  })

  it('renders stat numbers with suffixes', () => {
    render(<Stats />)

    expect(screen.getByText('1,100+')).toBeInTheDocument()
    expect(screen.getByText('1,200+')).toBeInTheDocument()
    expect(screen.getByText('340')).toBeInTheDocument()
    expect(screen.getByText('12,000+')).toBeInTheDocument()
  })

  it('has background image with overlay', () => {
    const { container } = render(<Stats />)

    const bgImg = container.querySelector('img[aria-hidden="true"]')
    expect(bgImg).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
