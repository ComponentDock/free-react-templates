import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('links Component Dock as the page\u2019s only outbound credit', () => {
    const { container } = render(<Attribution />)

    const line = container.firstElementChild

    expect(line).toHaveClass('pt-[20px]', 'text-center', 'text-[13px]', 'text-credit')

    const link = screen.getByRole('link', { name: 'Component Dock' })

    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveClass('underline', 'hover:opacity-80')
  })

  it('accepts a className override', () => {
    const { container } = render(<Attribution className="pt-0" />)

    expect(container.firstElementChild).toHaveClass('pt-0')
  })
})
