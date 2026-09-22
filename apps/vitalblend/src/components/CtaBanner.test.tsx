import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { level: 2, name: /happy mind healthy life/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/almost before we knew it/i)).toBeInTheDocument()
  })

  it('renders the Take a Service button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: 'Take a Service' })).toBeInTheDocument()
  })
})
