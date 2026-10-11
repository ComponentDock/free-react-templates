import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the template name', () => {
    render(<App />)
    expect(document.title).toBe('Skybound — Travel Template')
  })

  it('composes the off-canvas menu and top bar before the main landmark, with the footer last', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: 'Top action bar' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.queryByRole('banner')).not.toBeInTheDocument()

    for (const heading of [
      'Santorini Islandin Greece',
      'Popular Places AroundThe World',
      'Best Tour PlansRecently',
      'Benefits OurCustomers Enjoy',
      'Search Suitable & DesiredPackage for You',
      'Subscribeto Get Updated forOur Newsletter',
    ]) {
      expect(
        screen.getAllByRole('heading', { level: 1 }).some((node) => node.textContent === heading),
      ).toBe(true)
    }
  })

  it('keeps the mandatory Component Dock footer credit and placeholder imagery only', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    for (const image of screen.getAllByRole('img')) {
      expect(image.getAttribute('src')).toMatch(/^https:\/\/picsum\.photos\/seed\/skybound/)
    }
  })
})
