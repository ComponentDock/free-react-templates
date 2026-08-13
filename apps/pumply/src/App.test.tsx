import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Welcome To Pumply' })).toBeInTheDocument()
    const sectionTitles = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(sectionTitles).toEqual([
      'Step Up Your Fitness',
      'Classes',
      'Schedule',
      'Trainers',
      'Our Featured Services',
      'Contact Us',
    ])
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText('2,260')).toBeInTheDocument()
  })
})
