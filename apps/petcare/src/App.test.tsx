import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Petcare — Pet Care Services Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain(
      'We Care Your Pets.',
    )
    expect(within(main).getByText('Best Pet Care Services')).toBeInTheDocument()
    expect(within(main).getByText('We are commited for better service')).toBeInTheDocument()
    expect(within(main).getByText('Pets Photo Gallery')).toBeInTheDocument()
    expect(within(main).getByText('Any time you can call us!')).toBeInTheDocument()
    expect(within(main).getByText('Our Team Mambers')).toBeInTheDocument()
    expect(within(main).getByText('Our Recent Blog')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
