import { Light as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import csharp from "react-syntax-highlighter/dist/esm/languages/hljs/csharp";
import swift from "react-syntax-highlighter/dist/esm/languages/hljs/swift";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import c from "react-syntax-highlighter/dist/esm/languages/hljs/c";
import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp";
import rust from "react-syntax-highlighter/dist/esm/languages/hljs/rust";
import perl from "react-syntax-highlighter/dist/esm/languages/hljs/perl";

ReactSyntaxHighlighter.registerLanguage("javascript", js);
ReactSyntaxHighlighter.registerLanguage("csharp", csharp);
ReactSyntaxHighlighter.registerLanguage("swift", swift);
ReactSyntaxHighlighter.registerLanguage("java", java);
ReactSyntaxHighlighter.registerLanguage("python", python);
ReactSyntaxHighlighter.registerLanguage("typescript", typescript);
ReactSyntaxHighlighter.registerLanguage("c", c);
ReactSyntaxHighlighter.registerLanguage("cpp", cpp);
ReactSyntaxHighlighter.registerLanguage("rust", rust);
ReactSyntaxHighlighter.registerLanguage("perl", perl);

export default function SyntaxHighlighter({
  language,
  className,
  children
}: {
  language: string;
  className?: string;
  children: string;
}) {
  return (
    <ReactSyntaxHighlighter
      language={language}
      style={gradientDark}
      className={`rounded-md ${className}`}>
      {children}
    </ReactSyntaxHighlighter>
  );
}
