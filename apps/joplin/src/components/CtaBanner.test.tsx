import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA section', () => {
    render(<CtaBanner />)
    expect(screen.getByTestId('cta')).toBeInTheDocument()
  })

  it('displays the CTA heading text', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Do you want to know more about me?')).toBeInTheDocument()
  })

  it('displays a Download CV button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /Download CV/ })).toBeInTheDocument()
  })
})
