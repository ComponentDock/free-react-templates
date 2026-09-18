import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /User experience design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Web and App development/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Digital and innovative marketing/i }),
    ).toBeInTheDocument()
  })

  it('renders service tags', () => {
    render(<Services />)
    expect(screen.getByText('Branding and Identity')).toBeInTheDocument()
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('Lead Generation')).toBeInTheDocument()
  })

  it('renders service numbers', () => {
    render(<Services />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})
