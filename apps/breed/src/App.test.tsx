import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Breed — Dog Breed Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toBe('We Love Pets')
    expect(within(main).getByText("It's a Dog Life")).toBeInTheDocument()
    expect(within(main).getByText('Every Dog Needs A Good Owner')).toBeInTheDocument()
    expect(within(main).getByText('Dog Breed Collections')).toBeInTheDocument()
    expect(within(main).getByText('Recent Blog Post')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
