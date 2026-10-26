import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('links Component Dock and nothing else', () => {
    render(<PageFooter />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})
