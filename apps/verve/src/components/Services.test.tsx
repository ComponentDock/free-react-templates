import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Verve provides a fully featured text services platform!/i,
      }),
    ).toBeInTheDocument()

    for (const title of [
      'Unlimited Features',
      'Multiple Functions',
      'Advanced Visualizations',
      'Community & Supports',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
