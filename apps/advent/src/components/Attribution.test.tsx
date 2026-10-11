import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('credits Component Dock from the footer', () => {
    const { container } = render(<Attribution />)

    const footer = container.querySelector('footer')

    expect(footer).toHaveClass(
      'text-center',
      'font-sans',
      'text-[14px]',
      'leading-[1.5]',
      'text-white',
    )
    expect(footer).toHaveTextContent('Made with')

    const link = screen.getByRole('link', { name: 'Component Dock' })

    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveClass('underline', 'hover:opacity-80')
  })

  it('accepts a className override', () => {
    const { container } = render(<Attribution className="pb-2" />)

    expect(container.querySelector('footer')).toHaveClass('pb-2')
  })
})
