import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PromoCTA } from './PromoCTA'

describe('PromoCTA', () => {
  it('renders the heading', () => {
    render(<PromoCTA />)
    expect(screen.getByText(/Our Latest Design/)).toBeInTheDocument()
  })

  it('renders the Download Now button', () => {
    render(<PromoCTA />)
    expect(screen.getByText('Download Now')).toBeInTheDocument()
  })

  it('has a link for the download button', () => {
    render(<PromoCTA />)
    const link = screen.getByText('Download Now').closest('a')
    expect(link).toHaveAttribute('href', '#')
  })
})
