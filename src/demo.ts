import { AdjListGraph } from "./graph-adj-list.ts";
import { AdjMatrixGraph } from "./graph-adj-matrix.ts";

export function demo(): void {
  // Graph from Мал. 1: vertices {1,2,3,4,5}
  // Edges: 1-2, 1-5, 2-3, 2-4, 2-5, 3-4, 4-5

  console.log("=== Завдання 1: DFS (список суміжних вершин) ===\n");
  const adjList = new AdjListGraph();
  for (const [u, v] of [[1,2],[1,5],[2,3],[2,4],[2,5],[3,4],[4,5]]) {
    adjList.addEdge(u, v);
  }
  console.log("Список суміжності:");
  adjList.printAdj();
  const dfsResult1 = adjList.dfs(1);
  console.log(`\nDFS (стартова вершина 1): ${dfsResult1.join(", ")}`);

  console.log("\n=== Завдання 2: DFS (матриця суміжності) ===\n");
  const adjMatrix = new AdjMatrixGraph(5);
  for (const [u, v] of [[1,2],[1,5],[2,3],[2,4],[2,5],[3,4],[4,5]]) {
    adjMatrix.addEdge(u, v);
  }
  console.log("Матриця суміжності:");
  adjMatrix.printMatrix();
  const dfsResult2 = adjMatrix.dfs(1);
  console.log(`\nDFS (стартова вершина 1): ${dfsResult2.join(", ")}`);
}
