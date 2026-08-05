import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Appli — App Landing Page Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Stay connected together in your own business network',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Finally focus on my marketing strategy and delegate',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'You have the power to personalize your website coding.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Personalized experiences are proven to increase conversions',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Amazing customer review' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Start finding your dream job' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
