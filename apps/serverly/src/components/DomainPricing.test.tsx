import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DomainPricing } from './DomainPricing'

describe('DomainPricing', () => {
  it('lists the five extensions with their prices', () => {
    render(<DomainPricing />)

    const list = screen.getByRole('list', { name: /domain prices/i })
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(5)
    expect(items[0]).toHaveTextContent('.com$3.99')
    expect(items[1]).toHaveTextContent('.net$1.99')
    expect(items[2]).toHaveTextContent('.org$2.99')
    expect(items[3]).toHaveTextContent('.io$3.99')
    expect(items[4]).toHaveTextContent('.info$13.99')
    expect(list).toBeInTheDocument()
  })
})
