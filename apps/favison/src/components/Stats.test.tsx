import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the heading, blurb, image, and three icon rows', () => {
    render(<Stats />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Form Female From Cattle Evening.' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/And appear great open bearing evening dominion/)).toBeInTheDocument()
    expect(screen.getByText('Set dry signs spirit a kind First shall them.')).toBeInTheDocument()
    expect(
      screen.getByText("He two face one moved dominion man you're likeness"),
    ).toBeInTheDocument()
    expect(screen.getByText('Sea forth fill have divide be dominion from life')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Favison growth stats dashboard' })).toBeInTheDocument()
  })
})
