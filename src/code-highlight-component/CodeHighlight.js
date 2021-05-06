import { React } from "react";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeHighlight = ({ code}) => {

  const inputCode = code;

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle ={{borderRadius:"0.3rem"}}>
      {inputCode}
    </SyntaxHighlighter>
  );
};
