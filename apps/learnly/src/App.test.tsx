import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { footer } from './data'

describe('App', () => {
  it('renders every section in the reference order inside a main landmark', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)
    const expectedOrder = [
      'Benefits About Online Learning Expertise',
      'Explore Our Popular Online Courses',
      'Browse Our Online Courses',
      'Our Successful Students',
      'Recent From Blog',
      'Pricing & Packages',
      'Newsletter - Stay tune and get the latest update',
    ]
    const positions = expectedOrder.map((heading) => headings.indexOf(heading))
    expect(positions.every((position) => position >= 0)).toBe(true)
    expect(positions).toEqual([...positions].sort((a, b) => a - b))
  })

  it('renders the hero headline and the top-bar brand', () => {
    render(<App />)

    expect(screen.getByText('Best Online Education Expertise')).toBeInTheDocument()
    expect(screen.getAllByText('Learnly').length).toBeGreaterThan(0)
  })

  it('links the footer to Component Dock and never references the source', () => {
    render(<App />)

    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')

    expect(document.body.innerHTML.toLowerCase()).not.toContain('colorlib')
  })
})
