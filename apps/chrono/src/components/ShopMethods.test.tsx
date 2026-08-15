import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { methods } from '../data'
import { ShopMethods } from './ShopMethods'

describe('ShopMethods', () => {
  it('renders three method columns with titles and paragraphs', () => {
    render(<ShopMethods />)

    for (const method of methods) {
      expect(screen.getByRole('heading', { name: method.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(methods[0]!.paragraph)).toHaveLength(methods.length)
  })
})
