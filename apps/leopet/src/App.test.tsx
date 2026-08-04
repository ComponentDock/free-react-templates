import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Leopet — Pet Care Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain(
      'Give your pet Best Care',
    )
    expect(within(main).getByText('We care your pet As you care')).toBeInTheDocument()
    expect(within(main).getByText('We Provide Best Services')).toBeInTheDocument()
    expect(within(main).getByText('We need your help Adopt Us')).toBeInTheDocument()
    expect(within(main).getByText('What Pet Owners Say')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
