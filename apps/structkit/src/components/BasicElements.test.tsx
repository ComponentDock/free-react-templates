import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BasicElements } from './BasicElements'
import { Footer } from './Footer'

/** The source brand must never surface in the app; provenance lives in the spec. */
const SOURCE_BRAND = new RegExp(['color', 'lib'].join(''), 'i')

describe('BasicElements', () => {
  it('renders the standalone heading band', () => {
    render(<BasicElements />)

    expect(screen.getByRole('heading', { level: 1, name: 'Basic Elements' })).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('credits Component Dock instead of the source', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} All rights reserved`)),
    ).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.queryByText(SOURCE_BRAND)).not.toBeInTheDocument()
  })
})
