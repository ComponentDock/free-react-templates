import { ColBlock } from './ColBlock'
import { COLUMNS } from '../lib/site'

/**
 * The band's two sub-blocks, side by side from 768px up and stacked below it. They are the columns
 * the design draws beside its lead — the app's own copy, in the design's own shape.
 */
export function TwoColumn() {
  return (
    <>
      {COLUMNS.map((column) => (
        <ColBlock key={column.heading} column={column} />
      ))}
    </>
  )
}
