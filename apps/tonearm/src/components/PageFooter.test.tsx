import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock and nothing else', () => {
    render(<PageFooter />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByRole('contentinfo').textContent).toBe('More templates at Component Dock')
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
})
