/**
 * The ground: four blurred colour fields and a scrim, all CSS. There is no
 * gradient behind them and no state in here — the drift is three keyframes, so
 * nothing about the mesh belongs in an effect.
 */
export function Mesh() {
  return (
    <div className="ag-mesh" aria-hidden="true">
      <span className="ag-blob ag-blob--a" />
      <span className="ag-blob ag-blob--b" />
      <span className="ag-blob ag-blob--c" />
      <span className="ag-blob ag-blob--d" />
    </div>
  )
}
