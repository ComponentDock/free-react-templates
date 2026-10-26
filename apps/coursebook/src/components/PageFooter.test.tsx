import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock as the single attribution line', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).toBe('More templates at Component Dock')

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(document.querySelectorAll('a')).toHaveLength(1)
  })
})
