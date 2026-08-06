import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline and the purchase button', () => {
    render(<CtaBand />)

    expect(screen.getByRole('heading', { name: /make your website/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Purchase Now/ })).toBeInTheDocument()
  })
})
