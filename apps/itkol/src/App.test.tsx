import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Itkol — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We provide best IT solution/)

    expect(
      screen.getByRole('heading', { level: 2, name: /IT solutions for startup and enterprises/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /IT services customized for your industry/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'ITKol - Partner for Your Business' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Some of Our Great Stuffs' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
