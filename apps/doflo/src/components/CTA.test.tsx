import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the CTA heading', () => {
    render(<CTA />)
    expect(
      screen.getByRole('heading', { name: /create something awesome together/i }),
    ).toBeInTheDocument()
  })

  it('renders CTA links', () => {
    render(<CTA />)
    expect(screen.getByText('Discuss project')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
