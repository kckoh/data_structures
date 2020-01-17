import LinkedList from "../components/linkedList.js"
const node = new LinkedList(1)
const Index = () => (
  <div>
    <p>Hello Next.js</p>
    {node.addNode(2), node.addNode(3), node.transverse()   }
  </div>
);

export default Index;