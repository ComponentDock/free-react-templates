import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppSplit } from './AppSplit'

describe('AppSplit', () => {
  it('renders the heading, blurb, call-to-action, and showcase image', () => {
    const { container } = render(<AppSplit />)

    expect(screen.getByRole('heading', { name: 'Built for every device' })).toBeInTheDocument()
    expect(screen.getByText(/one seamless experience/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '#contact')

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/wordpressapp-split'),
    )
  })
})
