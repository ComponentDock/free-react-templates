import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets document title', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Education')
    expect(screen.getByText('Popular Courses')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('What our students say')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })
})
