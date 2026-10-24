import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the band heading and the get-started link', () => {
    render(<CallToAction />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Get started with our products' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '#contact')
  })
})
