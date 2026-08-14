import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Intro } from './Intro'
import { introStatement } from '../data'

describe('Intro', () => {
  it('renders the thin intro statement headline', () => {
    render(<Intro />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('For busy business professionals')
    expect(heading).toHaveTextContent(introStatement)
    expect(heading).toHaveClass('font-light')
  })
})
