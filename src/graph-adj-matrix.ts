enum Color { WHITE, GRAY, BLACK }

export class AdjMatrixGraph {
  private matrix: number[][];
  private vertices: number;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.matrix = Array.from({ length: vertices }, () => new Array(vertices).fill(0));
  }

  addEdge(u: number, v: number): void {
    this.matrix[u - 1][v - 1] = 1;
    this.matrix[v - 1][u - 1] = 1;
  }

  dfs(start: number): number[] {
    const color = new Array(this.vertices).fill(Color.WHITE);
    const result: number[] = [];
    this.dfsVisit(start - 1, color, result);
    return result;
  }

  private dfsVisit(u: number, color: Color[], result: number[]): void {
    color[u] = Color.GRAY;
    for (let v = 0; v < this.vertices; v++) {
      if (this.matrix[u][v] === 1 && color[v] === Color.WHITE) {
        this.dfsVisit(v, color, result);
      }
    }
    color[u] = Color.BLACK;
    result.push(u + 1);
  }

  printMatrix(): void {
    console.log("     " + Array.from({ length: this.vertices }, (_, i) => i + 1).join("  "));
    for (let i = 0; i < this.vertices; i++) {
      console.log(`  ${i + 1}: [${this.matrix[i].join(", ")}]`);
    }
  }
}
