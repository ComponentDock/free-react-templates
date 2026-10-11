import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('credits Component Dock as the only link', () => {
    const { container } = render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getAllByRole('link')).toHaveLength(1)

    const text = container.querySelector('footer')!.textContent ?? ''
    expect(text).toContain(`Copyright © ${new Date().getFullYear()} All rights reserved.`)
    expect(text).toContain('Made with')
    expect(text).toContain('by Component Dock')
  })
})
