import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the heading and three service columns with icons and blurbs', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    for (const service of services) {
      const heading = screen.getByRole('heading', { level: 3, name: service.title })
      expect(heading).toBeInTheDocument()
      const article = heading.closest('article')
      expect(article).toHaveTextContent(service.blurb)
      expect(article!.querySelector('svg')).toBeInTheDocument()
    }
  })
})
