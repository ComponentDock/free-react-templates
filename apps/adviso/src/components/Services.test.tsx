import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three numbered service cards with titles and blurbs', () => {
    render(<Services />)

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: /Greet first-time visitors/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Annoying popups/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Turn your email list/i }),
    ).toBeInTheDocument()

    expect(screen.getByText(/strong first impression/i)).toBeInTheDocument()
    expect(screen.getByText(/segmented campaigns/i)).toBeInTheDocument()
  })
})
