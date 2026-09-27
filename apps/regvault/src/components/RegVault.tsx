import { FormPanel } from './FormPanel'
import { ImagePanel } from './ImagePanel'

export function RegVault() {
  return (
    <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded shadow-2xl md:flex-row">
      <FormPanel />
      <ImagePanel />
    </div>
  )
}
