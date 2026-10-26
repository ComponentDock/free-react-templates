import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter — the recreation’s one addition', () => {
  it('links Component Dock instead of any external attribution', () => {
    const { container } = render(<PageFooter />)
    const links = container.querySelectorAll('a')

    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(links[0]).toHaveTextContent('Component Dock')
    expect(container.textContent).toBe('More templates at Component Dock')
  })

  it('is one quiet line, not a band', () => {
    const { container } = render(<PageFooter />)
    const footer = container.querySelector('footer') as HTMLElement

    expect(footer.getAttribute('class')).toContain('mt-6')
    expect(footer.getAttribute('class')).toContain('text-center')
    expect(footer.querySelectorAll('*')).toHaveLength(2)
  })
})
