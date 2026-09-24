export function GeometricPattern() {
  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 h-full w-1/2 opacity-20"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Geometric wireframe lines */}
      <line x1="0" y1="100" x2="400" y2="50" stroke="white" strokeWidth="1" />
      <line x1="0" y1="200" x2="350" y2="150" stroke="white" strokeWidth="1" />
      <line x1="50" y1="0" x2="200" y2="400" stroke="white" strokeWidth="1" />
      <line x1="150" y1="0" x2="350" y2="350" stroke="white" strokeWidth="1" />
      <line x1="0" y1="300" x2="300" y2="250" stroke="white" strokeWidth="1" />
      <line x1="100" y1="0" x2="400" y2="300" stroke="white" strokeWidth="1" />
      <line x1="0" y1="400" x2="250" y2="350" stroke="white" strokeWidth="1" />
      <line x1="200" y1="0" x2="400" y2="200" stroke="white" strokeWidth="1" />
      <line x1="0" y1="500" x2="300" y2="450" stroke="white" strokeWidth="1" />
      <line x1="50" y1="100" x2="300" y2="500" stroke="white" strokeWidth="1" />
      <line x1="250" y1="0" x2="400" y2="150" stroke="white" strokeWidth="1" />
      <line x1="0" y1="150" x2="200" y2="550" stroke="white" strokeWidth="1" />
      {/* Triangles / polygons */}
      <polygon points="50,100 200,50 150,200" stroke="white" strokeWidth="1" fill="none" />
      <polygon points="100,300 250,200 200,400" stroke="white" strokeWidth="1" fill="none" />
      <polygon points="0,450 150,350 100,550" stroke="white" strokeWidth="1" fill="none" />
      <polygon points="200,100 350,50 300,200" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  )
}
