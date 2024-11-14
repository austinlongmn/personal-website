import SyntaxHighlighter from "../components/SyntaxHighlighter";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Hello, my name is Austin.</p>
      <h2>Languages</h2>
      <p>Here are the programming languages I can write code in:</p>
      <div className="grid grid-cols-2 gap-4 py-4">
        <SyntaxHighlighter language="javascript">
          {`console.log("JavaScript (and TypeScript), also Typescript JSX")`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="swift">{`print("Swift")`}</SyntaxHighlighter>
        <SyntaxHighlighter language="java">
          {`System.out.println("Java");`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="csharp">
          {`Console.Log("C#");`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">
          {`print("Python")`}
        </SyntaxHighlighter>
      </div>
      <p>Here are some languages that I am interested in:</p>
      <div className="grid grid-cols-2 gap-4 py-4">
        <SyntaxHighlighter language="c">{`printf("C")`}</SyntaxHighlighter>
        <SyntaxHighlighter language="cpp">
          {`std::cout << "C++" << std::endl;`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="rust">
          {`print!("Rust");`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="perl">{`print "Perl"`}</SyntaxHighlighter>
      </div>
      <p>What is my favorite language, you ask? Good question!</p>
      <div className="py-4">
        <SyntaxHighlighter language="swift">
          {`print("My favorite language is Swift!")`}
        </SyntaxHighlighter>
      </div>
      <p>However, Rust looks pretty cool...</p>
    </div>
  );
}
