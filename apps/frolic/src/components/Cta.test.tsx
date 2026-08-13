import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the amber band with headline and GET STARTED button', () => {
    const { container } = render(<Cta />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Bring Fun Life To Your Kids',
    )
    expect(screen.getByRole('link', { name: 'GET STARTED' })).toHaveAttribute('href', '#pricing')
    expect(container.querySelector('section')!.className).toContain('bg-amber')
  })
})
