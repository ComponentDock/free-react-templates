import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ShieldLogo } from './ShieldLogo'

describe('ShieldLogo', () => {
  it('renders the crest as a labelled image', () => {
    render(<ShieldLogo />)
    expect(screen.getByRole('img', { name: 'Sideline crest' })).toBeInTheDocument()
  })

  it('applies the default and custom className', () => {
    const { rerender } = render(<ShieldLogo />)
    expect(screen.getByRole('img', { name: 'Sideline crest' })).toHaveClass('h-12', 'w-10')

    rerender(<ShieldLogo className="h-10 w-8" />)
    expect(screen.getByRole('img', { name: 'Sideline crest' })).toHaveClass('h-10', 'w-8')
  })
})
