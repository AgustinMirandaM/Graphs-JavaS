class Graph {
    constructor () {
        this.nodes = [];
        this.adjlist = {};
    };

    addNode (node) {
        this.nodes.push (node);
        this.adjlist [node] = [];
    };

    addEdge (node1, node2) {
        this.adjlist [node1].push (node2);
        this.adjlist [node2].push (node1);
    };
}

const graph = new Graph();

graph.addNode ("A");
graph.addNode ("B");
graph.addNode ("C");
graph.addNode ("D");

graph.addEdge ("A", "B");
graph.addEdge ("A", "C");
graph.addEdge ("B", "D");
graph.addEdge ("C", "B");

console.log(graph.adjlist); 