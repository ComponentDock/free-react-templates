import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'

describe('App', () => {
  it('composes the reference order with one level-one heading', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('banner')).toHaveClass('sticky')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')

    const main = container.querySelector('main') as HTMLElement
    const ids = Array.from(main.children).map((child) => child.id || child.tagName)
    expect(ids).toEqual([
      'top',
      'SECTION',
      'work',
      'planting',
      'calendar',
      'maintenance',
      'testimonials',
      'faq',
      'contact',
    ])

    expect(screen.getByRole('contentinfo')).toHaveTextContent('Component Dock')
    expect(screen.getByTestId('scroll-progress')).toBeInTheDocument()
    expect(screen.getByTestId('cookie-strip')).toBeInTheDocument()
    expect(screen.queryByTestId('preloader')).toBeNull()
  })
})
