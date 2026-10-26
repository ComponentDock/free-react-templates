import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock as the page\'s only link', () => {
    render(<PageFooter />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link.getAttribute('class')).toContain('underline')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})
