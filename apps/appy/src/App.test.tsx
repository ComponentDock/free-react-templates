import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Appy — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Start your amazing stuff through appy.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About Appy' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 2, name: 'Great Application Ever' }),
    ).toHaveLength(2)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Powerful Features As Always' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Clients Love Us' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Screenshot 01' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Our Approach to Design is Pretty Simple and Clear',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Download The App' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Awesome Pricing Plan' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
