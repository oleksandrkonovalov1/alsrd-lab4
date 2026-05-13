enum Color { WHITE, GRAY, BLACK }

export class AdjListGraph {
  private adj: Map<number, number[]> = new Map();

  addVertex(v: number): void {
    if (!this.adj.has(v)) this.adj.set(v, []);
  }

  addEdge(u: number, v: number): void {
    this.addVertex(u);
    this.addVertex(v);
    this.adj.get(u)!.push(v);
    this.adj.get(v)!.push(u);
  }

  dfs(start: number): number[] {
    const color = new Map<number, Color>();
    for (const v of this.adj.keys()) color.set(v, Color.WHITE);

    const result: number[] = [];
    this.dfsVisit(start, color, result);
    return result;
  }

  private dfsVisit(u: number, color: Map<number, Color>, result: number[]): void {
    color.set(u, Color.GRAY);
    const neighbors = this.adj.get(u) ?? [];
    for (const v of neighbors) {
      if (color.get(v) === Color.WHITE) {
        this.dfsVisit(v, color, result);
      }
    }
    color.set(u, Color.BLACK);
    result.push(u);
  }

  printAdj(): void {
    for (const [v, neighbors] of this.adj) {
      console.log(`  ${v}: [${neighbors.join(", ")}]`);
    }
  }
}
