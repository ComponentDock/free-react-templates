import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service items', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { name: 'What you get if you start your business with us' }),
    ).toBeInTheDocument()

    for (const title of ['Development', 'Design', 'SEO']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
