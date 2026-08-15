import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services, servicesSectionTitle } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and every service block', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: servicesSectionTitle }),
    ).toBeInTheDocument()

    for (const service of services) {
      const block = screen
        .getByRole('heading', { level: 3, name: service.title })
        .closest('article') as HTMLElement
      expect(block).toBeInTheDocument()
      expect(block).toHaveTextContent(service.text)
      expect(block.querySelector('svg')).toBeInTheDocument()
    }
  })
})
