import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  classesHeading,
  pageTitle,
  servicesHeading,
  skipLabel,
  trainersHeading,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(pageTitle)
  })

  it('offers a skip link and composes the sections in reference order', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toHaveAttribute('href', '#main')

    const main = screen.getByRole('main')
    const sections = Array.from(main.querySelectorAll('section')).map((section) =>
      section.getAttribute('aria-label'),
    )
    expect(sections).toEqual([
      'Gym highlights',
      'Why train at Stryve',
      'Our services',
      'Our trainers',
      'Classes and membership',
    ])
    expect(screen.getByRole('heading', { level: 2, name: servicesHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: trainersHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: classesHeading })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
