import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('renders a back-to-top link pointing at the hero', () => {
    render(<BackToTop />)

    expect(screen.getByRole('link', { name: 'Back to top' })).toHaveAttribute('href', '#home')
  })
})
